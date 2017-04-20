#!/bin/sh

# configure uaac

uaac target http://localhost:8080/uaa
uaac token client get admin -s adminsecret

uaac user add eitan --given_name Eitan --family_name Suez --email esuez@pivotal.io --password hell0

uaac group add fortunes.read
uaac member add fortunes.read eitan

uaac client add greeting-service --name greeting-service --scope openid,fortunes.read --authorized_grant_types authorization_code,refresh_token -s secret
uaac client add fortune-service --name fortune-service --authorities fortunes.read,uaa.resource --authorized_grant_types authorization_code,refresh_token -s secret
