<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:u="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:template match="/">

<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style type="text/css" media="screen">
        body {margin:50px auto 50px auto;font-family:verdana;width:900px;}
        h1 {color:#55f;}
        h4 {margin-top:-15px;}
        li {font-size:17px;background:#eee;width:850px;padding:5px 0px 5px 10px;margin-bottom:15px;}
        li p {margin-top:0px;font-size:15px;margin-bottom:0px;}
        .footer {margin-top:50px;background:#ddd;padding:20px;width:900px;text-align:center;margin:auto;}
        </style>
    </head>

<body>

<h1>XML Sitemap</h1>
<h2>URLs sorted by last modified</h2>
<h4>Number of URLs: <xsl:value-of select="count(u:urlset/u:url)"></xsl:value-of></h4>

<ol>
<xsl:for-each select="u:urlset/u:url">
<xsl:sort select="u:lastmod" order="descending"/>
    <li><xsl:variable name="sitemapURL"><xsl:value-of select="u:loc"/></xsl:variable><a href="{$sitemapURL}"><xsl:value-of select="$sitemapURL"></xsl:value-of></a><p>Last modifed: <xsl:value-of select="u:lastmod" /></p></li>
</xsl:for-each>
</ol>

<div class="footer">This XML Sitemap was automatically generated.</div>

</body>
</html>
</xsl:template>
</xsl:stylesheet>