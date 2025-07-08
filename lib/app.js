module.exports = {
  "app_id": "876c46b4-98f0-47e6-911a-c77d808fbee5",
  "name": "Spotlight [Admin]",
  "created_by": "453908fb-1d4b-488e-96f5-52a19c3ee68c",
  "subdomain": "misty-mountain-3",
  "graphql": {
    "tables": [],
    "enabled": false,
    "initial": true
  },
  "cors": [
    "https://marquee-saas.vercel.app",
    "https://marquee-tech.com",
    "https://bluefind.com",
    "https://app.bluefind.com"
  ],
  "auth": {
    "jwt_type": "RS256",
    "token_header": "authorization",
    "session_key_values": {
      "4778786.2": {
        "column_id": "4778786.2",
        "param_key": "sub",
        "created_at": 1750233093.086,
        "column_name": "auth.su_app_id_to_user_id.user_id"
      }
    },
    "user_id_session_key": "sub",
    "user_id_column_id": "4778954.2",
    "role_session_key": "iss",
    "roles": [
      {
        "role_name": "iss",
        "role_type_name": "Admin",
        "custom_permissions": {},
        "role_value": "https://staging-api.marquee-tech.com/auth"
      }
    ]
  },
  "custom_domains": []
}