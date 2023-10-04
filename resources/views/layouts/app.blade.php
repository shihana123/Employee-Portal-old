
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>Document</title>
    @vite(['resources/js/app.js', 'resources/css/app.css'])
</head>
<body>
     
    <div id="app">
 
    <div class="py-4">
        @yield('content')
    </div>
     
    </div>
    
</body>
</html>   