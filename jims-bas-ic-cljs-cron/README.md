# jims-bas-ic-cljs-cron


# Set AWS IAM Role

`lein cljs-lambda default-iam-role`


# Deploy

```
$ serverless deploy
```

# Redeploy Function

```
$ serverless deploy function -f echo
```

# Invoke

```
$ curl -X POST <url> -H 'Content-Type: application/json' -d '{"body": "Hi"}'
```
