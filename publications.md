---
layout: page
title: "Publications"
permalink: /publications.html
---

# Publications

Below is a selection of peer-reviewed publications with short, practitioner-oriented summaries.

{% assign pubs = site.data.publications | sort: "year" | reverse %}
{% for pub in pubs %}
### {{ pub.title }} ({{ pub.year }})

**Authors:** {{ pub.authors }}  
**Journal:** *{{ pub.journal }}*

- 📝 [Summary]({{ pub.summary_url }})

---
{% endfor %}
