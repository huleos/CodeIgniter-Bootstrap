<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link rel="shortcut icon" type="image/png" href="<?= base_url(); ?>assets/img/favicon.png"/>

    <!-- SEO -->
    <title><?= $title ?></title>
    <meta name="description" content="<?= $description ?>" />

    <!-- CSS -->
    <link rel="stylesheet" href="<?= base_url(); ?>assets/css/style.css">

  </head>
  <body>

  <!-- HEADER -->
  <header>
    <nav class="navbar navbar-light bg-faded">
      <div class="container">
        <button class="navbar-toggler pull-right hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
          &#9776;
        </button>
        <a class="navbar-brand" href="/">Brand</a>

        <div class="collapse navbar-toggleable-xs pull-right" id="exCollapsingNavbar2">
          <ul class="nav navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- /HEADER -->