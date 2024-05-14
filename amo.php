<?php

include 'vendor/autoload.php';

use AmoCRM\{AmoAPI, AmoLead, AmoContact, AmoIncomingLeadForm, AmoAPIException};
use AmoCRM\TokenStorage\DatabaseStorage;

try {

    // // Параметры авторизации по протоколу oAuth 2.0
        //$clientId     = '3b56136d-6a23-441f-8fc0-9406eb714a06';
         //$clientSecret = 'nERKWpioxKkhtl9fcFPlBt6F9Kx6hqA0kyaYp0Wki9lZDTmP2VJMZlHyYjBi10qk';
         //$authCode     = 'def502008c81486e19bf7fcfd43169b0fb69582b54c5b394d0c35256b1d79f30f1daa19c38ed887343efb1b5bed8a2d3f9059083c4c9074104197858688f20cd27e7a4c6e5c8143bfdfbd5ac4655148830f67a525940e4ff020c7e8b37b5da8eb9ded3cf2727022424ea0b6100f698e80efcd44cbaa5da90c95361b872d8adcef2837893a30137a7c03e3473f87c03947f44ba7c405316327fda4d85d61fd8e23cc99f3b3b4fe2fad486e9c7b8a8f677dfda1fda3dbf94fbfc120dff0be1f3d27df5a029e8e755f38e075fcea223e74139d2f66012d8ad9b764db25963372d16494cc14ff563260aa25fbfe1df04c8cbacb46f5ce3fbd439c4b4d4b6ca631f8e8dd42333cfdc20f5843b3fe1b24705b51b30f1075347658ef3bdd68ec99dcbb87d55fe9fe8597f5e9f7b85ae9d698012b74cc78bf0e377a3010bbea23d6c839c5a5be063fb9a166f3588253dec38e5ae3ed8d9447ca7cdba7c18b881a69b5f30e9a96948d1dd69d38ef26c410b0df572441dc5382d4820323698f044b284e9c023440b8a3560a4f0fa525260eb04f76ae3c0a3a1c4b9b55253ca2969d69a8525d26e825505c5d5d587b44a0617bd730d34802c420b0c76a661c290c35413bc22a0fc70530cb76e807beb7fc17c6390ec4c4ac80f4aa7f17ba4cc489d56ce5867d0b217d0def8';
        // $redirectUri  = 'https://al-baraka.ru/';
        // $subdomain    = 'inforus453';
    

    
    //     // Авторизация
        // AmoAPI::oAuth2($subdomain, $clientId, $clientSecret, $redirectUri, $authCode);
    


    // Последующие авторизации
    $subdomain = 'infoleartexru';
    AmoAPI::oAuth2($subdomain);




} catch (AmoAPIException $e) {
    printf('Ошибка авторизации (%d): %s' . PHP_EOL, $e->getCode(), $e->getMessage());
} catch (TokenStorageException $e) {
    printf('Ошибка обработки токенов (%d): %s' . PHP_EOL, $e->getCode(), $e->getMessage());
}

