module EncodeContent
  def encode_content
    doc = Nokogiri::HTML(content.body.fragment.source.children.map(&:to_s).join("") )

    text_nodes = doc.xpath('//text()')

    text_nodes.each do |node|
      node.content = node.content.gsub('\n', 'ᥫ')
                                 .gsub('\r', '♡')
                                 .gsub('z', '↭')
                                 .gsub('b', 'z')
                                 .gsub('c', 'b')
                                 .gsub('d', 'c')
                                 .gsub('f', 'd')
                                 .gsub('g', 'f')
                                 .gsub('h', 'g')
                                 .gsub('j', 'h')
                                 .gsub('k', 'j')
                                 .gsub('l', 'k')
                                 .gsub('m', 'l')
                                 .gsub('n', 'm')
                                 .gsub('p', 'n')
                                 .gsub('q', 'p')
                                 .gsub('r', 'q')
                                 .gsub('s', 'r')
                                 .gsub('t', 's')
                                 .gsub('v', 't')
                                 .gsub('w', 'v')
                                 .gsub('x', 'w')
                                 .gsub('↭', 'x')
                                 .gsub('ᥫ', '\n')
                                 .gsub('♡', '\r')
    end

    self.content.body = ActionText::Content.new(doc.to_s)
  end
end
