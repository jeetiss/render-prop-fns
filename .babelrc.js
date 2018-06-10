const cjs = process.env.TEST

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'modules': false
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    cjs && '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-proposal-class-properties'
  ].filter(Boolean)
}
