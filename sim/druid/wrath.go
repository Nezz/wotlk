package druid

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/items"
	"github.com/wowsims/wotlk/sim/core/stats"
)

const IdolAvenger int32 = 31025
const IdolSteadfastRenewal int32 = 40712

func (druid *Druid) registerWrathSpell() {
	baseCost := 0.11 * druid.BaseMana

	actionID := core.ActionID{SpellID: 26985}
	manaMetrics := druid.NewManaMetrics(actionID)
	spellmodifier := 0.571

	// This seems to be unaffected by wrath of cenarius.
	bonusFlatDamage := core.TernaryFloat64(druid.Equip[items.ItemSlotRanged].ID == IdolAvenger, 25, 0)
	bonusFlatDamage += core.TernaryFloat64(druid.Equip[items.ItemSlotRanged].ID == IdolSteadfastRenewal, 70, 0)

	minBaseDamage := 557.0 + bonusFlatDamage
	maxBaseDamage := 627.0 + bonusFlatDamage

	effect := core.SpellEffect{
		ProcMask:             core.ProcMaskSpellDamage,
		BonusSpellCritRating: 2 * float64(druid.Talents.NaturesMajesty) * core.CritRatingPerCritChance,
		DamageMultiplier:     1 + 0.02*float64(druid.Talents.Moonfury),
		ThreatMultiplier:     1,

		BaseDamage:     core.BaseDamageConfigMagic(minBaseDamage, maxBaseDamage, spellmodifier+0.02*float64(druid.Talents.WrathOfCenarius)),
		OutcomeApplier: druid.OutcomeFuncMagicHitAndCrit(druid.SpellCritMultiplier(1, 0.2*float64(druid.Talents.Vengeance))),
		OnSpellHitDealt: func(sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect) {
			if spellEffect.Outcome.Matches(core.OutcomeCrit) {
				hasMoonkinForm := core.TernaryFloat64(druid.Talents.MoonkinForm, 1, 0)
				druid.AddMana(sim, druid.MaxMana()*0.02*hasMoonkinForm, manaMetrics, true)
			}
		},
	}

	// Improved Insect Swarm
	if druid.CurrentTarget.HasAura("Insect Swarm") {
		effect.DamageMultiplier *= 1 + 0.01*float64(druid.Talents.ImprovedInsectSwarm)
	}

	// Improved Faerie Fire
	if druid.CurrentTarget.HasAura("Improved Faerie Fire") {
		effect.BonusSpellCritRating += float64(druid.Talents.ImprovedFaerieFire) * 1 * core.CritRatingPerCritChance
	}

	// Solar eclipse buff
	if druid.HasAura("Solar Eclipse proc") {
		effect.DamageMultiplier *= 1.4
	}

	// Nature's Majesty
	effect.BonusSpellCritRating += 2 * float64(druid.Talents.NaturesMajesty) * core.CritRatingPerCritChance

	druid.Wrath = druid.RegisterSpell(core.SpellConfig{
		ActionID:    actionID,
		SpellSchool: core.SpellSchoolNature,

		ResourceType: stats.Mana,
		BaseCost:     baseCost,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				Cost:     baseCost * (1 - 0.03*float64(druid.Talents.Moonglow)),
				GCD:      core.GCDDefault,
				CastTime: time.Second*2 - (time.Millisecond * 100 * time.Duration(druid.Talents.StarlightWrath)),
			},

			ModifyCast: func(sim *core.Simulation, spell *core.Spell, cast *core.Cast) {
				druid.applyNaturesSwiftness(cast)
				druid.ApplyClearcasting(sim, spell, cast)
			},
		},

		ApplyEffects: core.ApplyEffectFuncDirectDamage(effect),
	})
}
