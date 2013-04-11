module RedmineSpdStats
  module Hooks

    class StatsHookListener < Redmine::Hook::ViewListener

      render_on :view_layouts_base_body_bottom, :partial => 'spd_stats/stats_bar'

      def view_layouts_base_html_head(context = {})
        javascript_include_tag('spd_stats.js', :plugin => 'redmine_spd_stats') +
          stylesheet_link_tag('spd_stats.css', :plugin => 'redmine_spd_stats') 
      end

    end

  end
end
