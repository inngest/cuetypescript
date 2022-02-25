package cuetypescript

import (
	"fmt"

	"cuelang.org/go/cue"
	"github.com/inngest/cuetypescript/generation"
)

// MarshalString marshals a Cue string into a Typescript type string,
// returning an error.
func MarshalString(cuestr string) (string, error) {
	r := &cue.Runtime{}
	inst, err := r.Compile(".", cuestr)
	if err != nil {
		return "", fmt.Errorf("error generating inst: %w", err)
	}
	return generation.MarshalCueValue(inst.Value())
}

// MarshalCueValue returns a typescript type given a cue value.
func MarshalCueValue(v cue.Value) (string, error) {
	return generation.MarshalCueValue(v)
}
