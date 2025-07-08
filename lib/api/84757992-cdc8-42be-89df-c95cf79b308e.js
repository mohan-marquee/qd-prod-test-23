module.exports = {
  "query_id": "84757992-cdc8-42be-89df-c95cf79b308e",
  "db_id": "2175387f-cff8-415f-a5e0-236cba1cea35",
  "route": "/admin/llm_chat",
  "method": "GET",
  "query_json": {
    "schema": "public",
    "table": "llm_chat",
    "method": "select",
    "table_alias": "llm_chat",
    "where": {
      "condition": "AND",
      "id": "root",
      "rules": [
        {
          "fieldName": "public.llm_chat.created_by",
          "id": "root_2032ebef",
          "input": "text",
          "operator": "equal",
          "method": "dynamic",
          "type": "text",
          "value": "QUERY.user_id",
          "input_key": "QUERY.user_id"
        },
        {
          "condition": "AND",
          "conditional_on": "QUERY.name",
          "id": "root-3694c8ab",
          "rules": [
            {
              "fieldName": "public.llm_chat.name",
              "id": "root-3694c8ab_base",
              "input": "text",
              "operator": "regex",
              "method": "dynamic",
              "type": "text",
              "value": "QUERY.name",
              "input_key": "QUERY.name"
            }
          ],
          "not": false
        }
      ],
      "not": false
    },
    "orderby_dynamic": false,
    "orderby_dynamic_columns": [],
    "limit_dynamic": true,
    "offset_dynamic": true,
    "offset": 0,
    "limit": 100,
    "tables_used": [
      "public.llm_chat"
    ],
    "include_result_count": true,
    "columns": [
      {
        "columnName": "public.llm_chat.created_at",
        "alias": "created_at",
        "label": "created_at"
      },
      {
        "columnName": "public.llm_chat.id",
        "alias": "id",
        "label": "id"
      },
      {
        "columnName": "public.llm_chat.name",
        "alias": "name",
        "label": "name"
      }
    ],
    "joins": [],
    "orderby": [
      {
        "asc": false,
        "id": "9851251.2",
        "label": "created_at",
        "name": "public.llm_chat.created_at",
        "alias": "created_at"
      }
    ],
    "condition_count": 2
  },
  "sqlmethod": "select",
  "querypaths": [
    {
      "path": "rules[0].",
      "input_key": "QUERY.user_id",
      "column": "public.llm_chat.created_by",
      "session": {},
      "type": "text"
    },
    {
      "path": "rules[1].rules[0].",
      "input_key": "QUERY.name",
      "column": "public.llm_chat.name",
      "session": {},
      "type": "text"
    },
    {
      "path": "rules[0].",
      "input_key": "QUERY.user_id",
      "column": "public.llm_chat.created_by",
      "session": {},
      "type": "text"
    },
    {
      "path": "rules[1].rules[0].",
      "input_key": "QUERY.name",
      "column": "public.llm_chat.name",
      "session": {},
      "type": "text"
    }
  ],
  "auth_required": true,
  "base": "9851251"
}