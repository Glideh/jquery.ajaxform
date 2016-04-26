# Installation

```bash
$ bower install jquery.ajaxform
```

# Usage

## Submitting a simple form

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
    $('#my_form').ajaxsend();
});
```

The uri `my_uri` will be requested by ajax with `POST` method.

## Handling the response

```html
<form id="my_form" method="GET" action="my_uri">
<!-- ... -->
<div id="my_loaded"></div>
```

```javascript
//  ...
    $('#my_form').ajaxsend()
        .done(function (data) {
            $('#my_loaded').append(data);
        });
```

`my_uri` will be `GET`ed and its result will be appended into `my_loaded`.

`ajaxsend()` returns the jquery [ajax](https://api.jquery.com/jQuery.ajax) object which calls back `done()`, `fail()`, ...

## Sending custom parameters

```html
<form id="my_form" method="POST" action="my_uri"></form>
```

```javascript
//  ...
    $('#my_form').ajaxsend({
        'data': {'param1': 'machin', 'param2': 'chouette'}
    }).done(function (data) {
        console.log(data);
    });
```

`my_uri` will be `POST`ed with `data` as params.

`ajaxsend()` returns the jquery [ajax](https://api.jquery.com/jQuery.ajax) object which calls back `done()`, `fail()`, ...
