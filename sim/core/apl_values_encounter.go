package core

import (
	"time"

	"github.com/wowsims/wotlk/sim/core/proto"
)

type APLValueCurrentTime struct {
	defaultAPLValueImpl
}

func (rot *APLRotation) newValueCurrentTime(config *proto.APLValueCurrentTime) APLValue {
	return &APLValueCurrentTime{}
}
func (value *APLValueCurrentTime) Type() proto.APLValueType {
	return proto.APLValueType_ValueTypeDuration
}
func (value *APLValueCurrentTime) GetDuration(sim *Simulation) time.Duration {
	return sim.CurrentTime
}

type APLValueCurrentTimePercent struct {
	defaultAPLValueImpl
}

func (rot *APLRotation) newValueCurrentTimePercent(config *proto.APLValueCurrentTimePercent) APLValue {
	return &APLValueCurrentTimePercent{}
}
func (value *APLValueCurrentTimePercent) Type() proto.APLValueType {
	return proto.APLValueType_ValueTypeFloat
}
func (value *APLValueCurrentTimePercent) GetFloat(sim *Simulation) float64 {
	return sim.CurrentTime.Seconds() / sim.Duration.Seconds()
}

type APLValueRemainingTime struct {
	defaultAPLValueImpl
}

func (rot *APLRotation) newValueRemainingTime(config *proto.APLValueRemainingTime) APLValue {
	return &APLValueRemainingTime{}
}
func (value *APLValueRemainingTime) Type() proto.APLValueType {
	return proto.APLValueType_ValueTypeDuration
}
func (value *APLValueRemainingTime) GetDuration(sim *Simulation) time.Duration {
	return sim.GetRemainingDuration()
}

type APLValueRemainingTimePercent struct {
	defaultAPLValueImpl
}

func (rot *APLRotation) newValueRemainingTimePercent(config *proto.APLValueRemainingTimePercent) APLValue {
	return &APLValueRemainingTimePercent{}
}
func (value *APLValueRemainingTimePercent) Type() proto.APLValueType {
	return proto.APLValueType_ValueTypeFloat
}
func (value *APLValueRemainingTimePercent) GetFloat(sim *Simulation) float64 {
	return sim.GetRemainingDurationPercent()
}

type APLValueNumberTargets struct {
	defaultAPLValueImpl
}

func (rot *APLRotation) newValueNumberTargets(config *proto.APLValueNumberTargets) APLValue {
	return &APLValueNumberTargets{}
}
func (value *APLValueNumberTargets) Type() proto.APLValueType {
	return proto.APLValueType_ValueTypeInt
}
func (value *APLValueNumberTargets) GetInt(sim *Simulation) int32 {
	return sim.GetNumTargets()
}
