
# Soft Wrapper - SERVER | DOCUMENTATION

Please follow the steps for use api's properly


## API Reference

#### Get all Project / Recent work

```http
  GET /api/v1/projects
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/` | `string` | Get All Projects |

#### Get item

```http
  GET /api/v1/projects/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Get Single Project |

#### Post item
```http
  POST /api/v1/projects
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/`      | `string` | Post a single project |

#### Update item by Id
```http
  PATCH /api/v1/projects/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | update project data |






Example: How you should pass data in body.

```bash
  {
    "demolink": "https://monirhrabby-client.vercel.app/",
    "buylink": "https://monirhrabby-client.vercel.app/"
  }
```

