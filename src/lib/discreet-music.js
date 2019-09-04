import Tone from 'tone'

const envelope = {
  attack: 0.1,
  release: 4,
  releaseCurve: 'linear'
}

const filterEnvelope = {
  baseFrequency: 200,
  octaves: 2,
  attack: 0,
  decay: 0,
  release: 1000
}

export const scoreA = synth => time => {
  synth.triggerAttackRelease('C5', '1n + 2n', time)
  synth.setNote('D5', '+2n')

  // Trigger E4 after 6 measures and hold for two 1/4 notes.
  synth.triggerAttackRelease('E4', '0:2', '+6:0')

  // Trigger G4 after 11 measures + a two 1/4 notes, and hold for two 1/4 notes.
  synth.triggerAttackRelease('G4', '0:2', '+11:2')

  // Trigger E5 after 19 measures and hold for 2 measures.
  // Switch to G5, A5, G5 after delay of a 1/4 note + two 1/16 notes each.
  synth.triggerAttackRelease('E5', '2:0', '+19:0')
  synth.setNote('G5', '+19:1:2')
  synth.setNote('A5', '+19:3:0')
  synth.setNote('G5', '+19:4:2')
}

export const scoreB = synth => time => {
  // Trigger D4 after 5 measures and hold for 1 full measure + two 1/4 notes
  synth.triggerAttackRelease('D4', '1:2', '+5:0')
  // Switch to E4 after one more measure
  synth.setNote('E4', '+6:0')

  // Trigger B3 after 11 measures + two 1/4 notes + two 1/16 notes. Hold for one measure
  synth.triggerAttackRelease('B3', '1m', '+11:2:2')
  // Switch to G3 after a 1/2 note more
  synth.setNote('G3', '+12:0:2')

  // Trigger G4 after 23 measures + two 1/4 notes. Hold for a half note.
  synth.triggerAttackRelease('G4', '0:2', '+23:2')
}

export function makeSynth () {
  return new Tone.DuoSynth({
    harmonicity: 1,
    volume: -20,
    voice0: {
      oscillator: {
        type: 'sawtooth'
      },
      envelope,
      filterEnvelope
    },
    voice1: {
      oscillator: {
        type: 'sine'
      },
      envelope,
      filterEnvelope
    },
    vibratoRate: 0.5,
    vibratoAmount: 0.1
  })
}
