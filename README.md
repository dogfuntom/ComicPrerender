# ComicPrerender
Opera extension that injects a prerender hint to a next comic strip.

Before:
``` html
<head>

    <link href="http://www.atomic-robo.com/atomicrobo.css" rel="stylesheet" type="text/css">
    <link href="http://www.atomic-robo.com/comiccontrol/defaultstyles.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="http://www.atomic-robo.com/favicon.ico" type="image/x-icon">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="shortcut icon" href="http://www.atomic-robo.com/favicon.ico" type="image/x-icon">
    <link rel="icon" href="http://www.atomic-robo.com/favicon.ico" type="image/x-icon">

    <title>Atomic Robo - v1ch1 Cover</title>

    blablabla
    
</head>
```

After:
``` html
<head>

    <link href="http://www.atomic-robo.com/atomicrobo.css" rel="stylesheet" type="text/css">
    <link href="http://www.atomic-robo.com/comiccontrol/defaultstyles.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="http://www.atomic-robo.com/favicon.ico" type="image/x-icon">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="shortcut icon" href="http://www.atomic-robo.com/favicon.ico" type="image/x-icon">
    <link rel="icon" href="http://www.atomic-robo.com/favicon.ico" type="image/x-icon">

    <title>Atomic Robo - v1ch1 Cover</title>

    blablabla
    
    <link rel="prerender" href="http://www.atomic-robo.com/atomicrobo/v1ch1-page-1">
</head>
```
