namespace :generate do
  desc "Generate an HTML file"
  task :html_file => :environment do
    content = "<html><head><title>Generated HTML</title></head><body><h1>Hello, World!</h1></body></html>"
    File.write('projects/generated.html', content)
    puts "Generated HTML file at public/generated.html"
  end
end
