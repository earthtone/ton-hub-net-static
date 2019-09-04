import Sound from './Sound.class'

export const scale = [
  261.63,
  293.66,
  329.63,
  349.23,
  392.00,
  440.00,
  493.88,
  523.25
]

export const playNote = (frq, ctx) => {
  const note = new Sound(ctx)
  const now = ctx.currentTime
  note.play(frq, now + 0.25)
}
