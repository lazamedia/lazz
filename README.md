<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            background-color: #f2f2f2;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            text-align: center;
            overflow: hidden;
            width: 300px;
        }

        h2 {
            color: #3498db;
        }

        label {
            display: block;
            margin: 10px 0 5px;
            color: #555;
            text-align: left;
        }

        input {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            background-color: #3498db;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
        }

        button:hover {
            background-color: #2980b9;
        }

        .home-button {
            margin-top: 15px;
            text-align: center;
        }

        .home-button a {
            color: #3498db;
            text-decoration: none;
            display: inline-block;
            margin-top: 10px;
        }

        .home-button a:hover {
            color: #2980b9;
        }

        p {
            margin-top: 15px;
        }

        a {
            color: #3498db;
            text-decoration: none;
        }

        a:hover {
            color: #2980b9;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            
            <button type="submit">Masuk</button>
        </form>
        <p>Belum Punya Akun ? <a href="register.html">Daftar</a></p>
        <!-- Tombol Home -->
        <div class="home-button">
            <a href="index.html">Home</a>
        </div>
    </div>
</body>
</html>
