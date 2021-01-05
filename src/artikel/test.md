---
tags: post
title: "Ein Himmelreich für ein Loft"
subtitle: "Günstiger Wohnraum ist in New York Mangelware. Luxusdomizile allerdings noch mehr."
image: loft.jpg
heroImage: loft.jpg
eleventyExcludeFromCollections: true
---

# Testartikel H1

Absatz. [Lorem ipsum dolor sit amet](https://www.zeit.de), consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco [laboris nisi ut](https://abc.xxx) aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Eine moderne Küche](/img/kitchen.jpg "Figure mit Bild in Absatzbreite"){:loading=lazy}

Absatz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Foto eines Loft in London](/img/loft.jpg "Figure mit Bild in Vollbreite"){:.wide loading=lazy}

Absatz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```jinja2
{% verbatim %}
{% block teaser_modifier -%}
    {% if teaser.serie.color -%}
        {{ 'teaser--light-text' if teaser.serie.color | color_is_dark }}
    {%- endif %}
{%- endblock %}
{% endverbatim %}
```

Absatz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Zwischenüberschrift H2, es folgt eine Liste

- Dies ist der erste Punkt einer ungeordneten Liste
- Dies der Zweite. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
- Hier ist der Letzte.

### Zwischenüberschrift H3, mehr Liste

1. Dies ist der erste Punkt einer ungeordneten Liste
2. Dies der Zweite. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
3. Hier ist der Letzte.

#### Zwischenüberschrift H4, es folgt ein Blockquote

Absatz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

> Phil Mattingly über Stunden hinweg über den Monitor wischen zu sehen, war in jedem Fall eine große Freude – und ein großer Gewinn für die Berichterstattung über eine Präsidentschaftswahl, die ganz sicher noch sehr lange in Erinnerung bleiben wird.
> — [Der Zauberer an der Magic Wall](https://www.dwdl.de/meinungen/80120/der_zauberer_an_der_magic_wall_die_hoffnung_wischt_zuletzt/)

Absatz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
