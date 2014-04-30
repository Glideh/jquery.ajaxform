# Description

Very simple jquery plugin to post an HTML form with ajax

# Usage

## Example 1

```html
<form id="my_form" method="POST" action="my_uri">
    <input type="text" name="input1" value="machin" />
    <input type="text" name="input2" value="chouette" />
    <button class="my_submitter">Submit</button>
</form>
```

```javascript
$('.my_submitter').click(function (e) {
    e.preventDefault();
    $('#my_form').ajaxpost();
});
```

The uri `my_uri` will be requested by ajax with `POST` method.

## Example 2

```html
<form id="my_form" method="GET" action="my_uri">
<!-- ... -->
<div id="my_loaded"></div>
```

```javascript
//  ...
    $('#my_form').ajaxpost()
        .done(function (data) {
            $('#my_loaded').append(data);
        });
```

`my_uri` will be `GET`ed and its result will be appended into `my_loaded`.

`ajaxpost()` returns the jquery [ajax](https://api.jquery.com/jQuery.ajax) object which calls back `done()`, `fail()`, ...
