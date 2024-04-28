node {
  stage 'Checkout'
  git url: 'https://github.com/exiled-scot/samurai-ink.git', branch: 'main'

  stage 'deploy'
  sh './deploy.sh'
}