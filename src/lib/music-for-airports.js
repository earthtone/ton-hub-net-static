import { DuoSynth, Loop } from 'tone'

const envelope = {
  attack: 0.7,
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

export const NOTES = [
  { note: 'F4', interval: 19.7, delay: 4.0 },
  { note: 'Ab4', interval: 17.8, delay: 8.1 },
  { note: 'C5', interval: 21.3, delay: 5.6 },
  { note: 'Db5', interval: 22.1, delay: 12.6 },
  { note: 'Eb5', interval: 18.4, delay: 9.2 },
  { note: 'F5', interval: 20.0, delay: 14.1 },
  { note: 'Ab5', interval: 17.7, delay: 3.1 }
]

export function makeSynths () {
  return NOTES.map(() => new DuoSynth({
    // harmonicity: 1,
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
  }))
}

export function makeLoops (synths, loopOptions) {
  return NOTES.map(({ note, interval, delay }, i) => {
    const loop = new Loop(() => {
      synths[i].triggerAttackRelease(note, loopOptions.noteDuration, delay)
    }, interval)

    loop.playbackRate = loopOptions.playbackRate
    return loop
  })
}
