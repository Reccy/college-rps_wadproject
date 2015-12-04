<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <h2 id="intro-text">Ultimate Champions:</h2>
    
    <xsl:for-each select="rss/channel/item">
        <div class="col-sm-4 xmlPanel">
            <p><xsl:value-of select="title"/></p>
            <p>Champion Since: <xsl:value-of select="pubDate"/></p>
            <p><xsl:value-of select="description"/></p>
        </div>
    </xsl:for-each>
</xsl:template>

</xsl:stylesheet>