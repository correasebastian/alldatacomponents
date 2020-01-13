# button component

implicit context

```
{% include '@button' %}
```

explicit context

```
{% include '@button' with {"btnText": "This is an button component!"} %}

```

<!--
```
\{% include '@button' %}
``` -->

This template for this component looks like this:

```
{{view '@button'}}
```

and it therefore expects a set of data to render it that is in the following format:

```
{{context '@button'}}
```
