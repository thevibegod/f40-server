# Users Calls:

- ## POST /validateuser

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

- ## GET /createuser

### request :

X-Access-Token

### response :

form

---

- ## POST /createuser

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

- ## DELETE /user

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

- ## PUT /user

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

# Profile Calls

- ## GET /addprofile

### request :

X-Access-Token

### response :

form

---

- ## GET /updateprofile

### request :

X-Access-Token

### response :

form

---

- ## POST /addprofile

### request (body):

X-Access-Token

name,
batch,
attendance,
mentorName,
rollNo
id(file)

### response :

```
{
  success: <boolean>,
  msg:  <string>
}
```

---

- ## GET /studentprofilepicture

### request (body):

X-Access-Token

rollNo

### response :

```
{
  success: false,
  msg:  <string>
}

<or>

image
```

---

- ## GET /studentprofiledetails

### request (body):

X-Access-Token

rollNo

### response :

```
{
  success: <boolean>,
  msg:  <string>
}
```

or

```
{
  name : <string>
  id : <ObjectID>
  rollNo :<string>
  batch: <string>
  mentorName:<string>
  attendance:<Number>
}
```

---

- ## GET /removestudentprofiledetails

### request (body):

X-Access-Token

rollNo

### response :

```
{
  success: <boolean>,
  msg:  <string>
}
```

---

- ## POST /studentprofiledetailsupdation

### request (body):

X-Access-Token

```
{
  name : <string>
  id : <ObjectID>
  rollNo :<string>
  batch: <string>
  mentorName:<string>
  attendance:<Number>
}
```

### response :

```
{
  success: <boolean>,
  msg:  <string>
}
```

or

```
{
  success: <boolean>,
  err: <object>
}
```

---

- ## POST /addachievement

### request (body):

X-Access-Token
rollNo (query)

achievement (body)

### response :

```
{
  success: <boolean>,
  msg:  <string>
}
```

---

- ## POST /removeachievement

### request (body):

X-Access-Token
rollNo (query)
id (query)

achievement (body)

### response :

```
{
  success: <boolean>,
  msg:  <string>
}
```

---
