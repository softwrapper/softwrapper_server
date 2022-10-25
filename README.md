
# Soft Wrapper - SERVER | DOCUMENTATION

Please follow the steps for use api's properly


## API Reference

#### PROJECT || RECENT WORK

```http
  GET /api/v1/projects
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/` | `string` | Get All Projects |

####  GET a single project

```http
  GET /api/v1/projects/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Get Single Project |

####  POST a single project
```http
  POST /api/v1/projects
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/`      | `string` | Post / GET a single project |

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

#### Delete item by Id
```http
  PATCH /api/v1/projects/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Delete a single project |


#### Our Teams
```http
  GET /api/v1/ourteams
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/` | `string` | Get our teams Data |
