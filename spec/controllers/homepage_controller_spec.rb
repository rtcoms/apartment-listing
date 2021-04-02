require 'rails_helper'

describe HomepageController do
  render_views

  it 'should respond successfully with page content' do
    get :index

    expect(response).to have_http_status(200)
    expect(response).to render_template("index")
    expect(response).to be_successful
  end
end
