module.exports = {
  "query_id": "87769963-8480-4439-91aa-683445a71af0",
  "db_id": "2175387f-cff8-415f-a5e0-236cba1cea35",
  "route": "/admin/llm_chat/messages",
  "method": "GET",
  "query_json": {
    "schema": "public",
    "table": "llm_messages",
    "method": "select",
    "table_alias": "llm_messages",
    "where": {
      "condition": "AND",
      "id": "root",
      "rules": [
        {
          "fieldName": "public.llm_messages.chat_id",
          "id": "root_429fed33",
          "input": "text",
          "operator": "equal",
          "method": "dynamic",
          "type": "text",
          "value": "QUERY.chat_id",
          "input_key": "QUERY.chat_id"
        },
        {
          "condition": "AND",
          "conditional_on": "QUERY.content",
          "id": "root-e8f0634b",
          "rules": [
            {
              "fieldName": "public.llm_messages.content",
              "id": "root-e8f0634b_base",
              "input": "text",
              "operator": "regex",
              "method": "dynamic",
              "type": "text",
              "value": "QUERY.content",
              "input_key": "QUERY.content"
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
    "limit": 500,
    "tables_used": [
      "public.llm_messages",
      "public.llm_chat"
    ],
    "include_result_count": true,
    "columns": [
      {
        "columnName": "public.llm_messages.content",
        "alias": "content",
        "label": "content"
      },
      {
        "columnName": "public.llm_messages.created_at",
        "alias": "created_at",
        "label": "created_at"
      },
      {
        "columnName": "public.llm_messages.filters",
        "alias": "filters",
        "label": "filters"
      },
      {
        "columnName": "public.llm_messages.id",
        "alias": "id",
        "label": "id"
      },
      {
        "columnName": "public.llm_messages.role",
        "alias": "role",
        "label": "role"
      },
      {
        "columnName": "public.llm_messages.tool_data",
        "alias": "tool_data",
        "label": "tool_data"
      },
      {
        "columnName": "public.llm_messages.tool_input",
        "alias": "tool_input",
        "label": "tool_input"
      },
      {
        "columnName": "public.llm_messages.tool_used",
        "alias": "tool_used",
        "label": "tool_used"
      },
      {
        "columnName": "public.llm_messages.type",
        "alias": "type",
        "label": "type"
      }
    ],
    "joins": [
      {
        "schema": "public",
        "table": "llm_chat",
        "columns": [
          {
            "columnName": "public.llm_chat.chat",
            "label": "chat"
          },
          {
            "columnName": "public.llm_chat.created_at",
            "alias": "public.llm_chat.created_at",
            "label": "created_at"
          },
          {
            "columnName": "public.llm_chat.created_by",
            "label": "created_by"
          },
          {
            "columnName": "public.llm_chat.filter_history",
            "label": "filter_history"
          },
          {
            "columnName": "public.llm_chat.id",
            "alias": "public.llm_chat.id",
            "label": "id"
          },
          {
            "columnName": "public.llm_chat.name",
            "label": "name"
          }
        ],
        "table_alias": "llm_chat",
        "default_alias": "llm_chat",
        "agg_result": true,
        "type": "INNER",
        "on": {
          "condition": "AND",
          "rules": [
            {
              "columnName": "public.llm_chat.id",
              "operator": "$columnref",
              "value": "public.llm_messages.chat_id"
            }
          ]
        },
        "alt_alias_prefix": "chat_id_"
      }
    ],
    "orderby": [
      {
        "asc": true,
        "id": "12979602.1",
        "label": "id",
        "name": "public.llm_messages.id",
        "alias": "id"
      }
    ],
    "condition_count": 2
  },
  "sqlmethod": "select",
  "querypaths": [
    {
      "path": "rules[0].",
      "input_key": "QUERY.chat_id",
      "column": "public.llm_messages.chat_id",
      "session": {},
      "type": "text"
    },
    {
      "path": "rules[1].rules[0].",
      "input_key": "QUERY.content",
      "column": "public.llm_messages.content",
      "session": {},
      "type": "text"
    },
    {
      "path": "rules[0].",
      "input_key": "QUERY.chat_id",
      "column": "public.llm_messages.chat_id",
      "session": {},
      "type": "text"
    },
    {
      "path": "rules[1].rules[0].",
      "input_key": "QUERY.content",
      "column": "public.llm_messages.content",
      "session": {},
      "type": "text"
    }
  ],
  "auth_required": true,
  "base": "12979602"
}