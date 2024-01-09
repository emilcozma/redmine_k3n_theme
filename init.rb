require 'redmine'
require_dependency 'k3n_theme_html_head_hook_listener'

Redmine::Plugin.register :k3n_theme do
  name 'keeen theme'
  author 'Emil COZMA'
  description "This plugin add custom CSS and JS."
  version '1.0.0'
  author_url 'https://www.cozma.es'

end
