# Users Calls:

## POST /validateuser

### request (body):

username,
password

### response:

```
{
success: <boolean>,
msg: <string>,
token: <token string>
}
```

---

## GET /createuser

### request :

X-Access-Token

### response :

form

## POST /createuser

### request (body):

X-Access-Token

username,
password

### response :

```
{
success: <boolean>,
msg: <string>
}
```

---

## DELETE /user

### request :

X-Access-Token

username,

### response :

```
{
success: <boolean>,
msg: <string>
}
```

---

## PUT /user

### request :

X-Access-Token

username,

### response :

```
{
success: <boolean>,
msg: <string>
}
```

---
