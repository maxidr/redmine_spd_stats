# encoding: utf-8
require 'redmine'
require_dependency 'hooks/stats_hook_listener'

Redmine::Plugin.register :redmine_spd_stats do
  name 'Redmine SPD stats plugin'
  author 'Maximiliano Dello Russo'
  description 'Este plugin de redmine permite visualizar una serie de datos estadísticos de la plataforma SPD'
  version '0.0.1'
  url 'http://example.com/path/to/plugin'
  author_url 'https://coderwall.com/maxidr'

  #Redmine::MenuManager.map :top_menu do | 

  # http://jsfiddle.net/PnUmM/1/
  # http://jsfiddle.net/veger/e4AUL/
  # http://techtalk.virendrachandak.com/sticky-header-and-footer-using-css/
end
