require 'rails_helper'

describe HomepageController do
  render_views

  it 'should respond successfully with page content' do
    get :index

    expect(response).to have_http_status(200)
    expect(response).to render_template("index")
    expect(response.body).to match('This is homepage')
    expect(response).to be_successful
  end
end
