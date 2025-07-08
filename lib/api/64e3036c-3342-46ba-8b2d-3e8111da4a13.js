module.exports = {
  "query_id": "64e3036c-3342-46ba-8b2d-3e8111da4a13",
  "db_id": "2175387f-cff8-415f-a5e0-236cba1cea35",
  "route": "/admin/api_logs",
  "method": "GET",
  "query_json": {
    "schema": "public",
    "table": "api_logs",
    "method": "select",
    "table_alias": "api_logs",
    "where": {
      "condition": "AND",
      "id": "root",
      "rules": [
        {
          "fieldName": "public.api_logs.user_id",
          "id": "root_abd324fd",
          "input": "text",
          "operator": "equal",
          "method": "dynamic",
          "type": "text",
          "value": "QUERY.user_id",
          "input_key": "QUERY.user_id"
        },
        {
          "condition": "AND",
          "conditional_on": "QUERY.endpoint_type",
          "id": "root-d92951dc",
          "rules": [
            {
              "fieldName": "public.api_logs.endpoint_type",
              "id": "root-d92951dc_base",
              "input": "text",
              "operator": "equal",
              "method": "dynamic",
              "type": "text",
              "value": "QUERY.endpoint_type",
              "input_key": "QUERY.endpoint_type"
            }
          ],
          "not": false
        },
        {
          "condition": "AND",
          "conditional_on": "QUERY.endpoint",
          "id": "root-951b49a4",
          "rules": [
            {
              "fieldName": "public.api_logs.endpoint",
              "id": "root-951b49a4_base",
              "input": "text",
              "operator": "regex",
              "method": "dynamic",
              "type": "text",
              "value": "QUERY.endpoint",
              "input_key": "QUERY.endpoint"
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
      "public.api_logs"
    ],
    "include_result_count": true,
    "columns": [
      {
        "columnName": "public.api_logs.created_at",
        "alias": "created_at",
        "label": "created_at"
      },
      {
        "columnName": "public.api_logs.endpoint",
        "alias": "endpoint",
        "label": "endpoint"
      },
      {
        "columnName": "public.api_logs.endpoint_type",
        "alias": "endpoint_type",
        "label": "endpoint_type"
      },
      {
        "columnName": "public.api_logs.id",
        "alias": "id",
        "label": "id"
      },
      {
        "columnName": "public.api_logs.ip",
        "alias": "ip",
        "label": "ip"
      },
      {
        "columnName": "public.api_logs.method",
        "alias": "method",
        "label": "method"
      },
      {
        "columnName": "public.api_logs.processing_time",
        "alias": "processing_time",
        "label": "processing_time"
      },
      {
        "columnName": "public.api_logs.request_body",
        "alias": "request_body",
        "label": "request_body"
      },
      {
        "columnName": "public.api_logs.request_query",
        "alias": "request_query",
        "label": "request_query"
      },
      {
        "columnName": "public.api_logs.status_code",
        "alias": "status_code",
        "label": "status_code"
      }
    ],
    "joins": [],
    "orderby": [
      {
        "asc": false,
        "id": "12991426.10",
        "label": "created_at",
        "name": "public.api_logs.created_at",
        "alias": "created_at"
      }
    ],
    "condition_count": 3
  },
  "sqlmethod": "select",
  "querypaths": [
    {
      "path": "rules[0].",
      "input_key": "QUERY.user_id",
      "column": "public.api_logs.user_id",
      "session": {},
      "type": "text"
    },
    {
      "path": "rules[1].rules[0].",
      "input_key": "QUERY.endpoint_type",
      "column": "public.api_logs.endpoint_type",
      "session": {},
      "type": "text"
    },
    {
      "path": "rules[2].rules[0].",
      "input_key": "QUERY.endpoint",
      "column": "public.api_logs.endpoint",
      "session": {},
      "type": "text"
    },
    {
      "path": "rules[0].",
      "input_key": "QUERY.user_id",
      "column": "public.api_logs.user_id",
      "session": {},
      "type": "text"
    },
    {
      "path": "rules[1].rules[0].",
      "input_key": "QUERY.endpoint_type",
      "column": "public.api_logs.endpoint_type",
      "session": {},
      "type": "text"
    },
    {
      "path": "rules[2].rules[0].",
      "input_key": "QUERY.endpoint",
      "column": "public.api_logs.endpoint",
      "session": {},
      "type": "text"
    }
  ],
  "auth_required": true,
  "base": "12991426"
}