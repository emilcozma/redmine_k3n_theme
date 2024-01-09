class K3nThemeHtmlHeadHookListener < Redmine::Hook::ViewListener
  render_on :view_layouts_base_html_head, :partial => "k3n_theme/html_head"
end
