module.exports = {
  "query_id": "2b366b4b-b605-43eb-925d-05b024855b44",
  "db_id": "2175387f-cff8-415f-a5e0-236cba1cea35",
  "route": "/admin/rate_limit_tiers",
  "method": "GET",
  "query_json": {
    "schema": "public",
    "table": "rate_limit_tiers",
    "method": "select",
    "table_alias": "rate_limit_tiers",
    "where": {
      "condition": "AND",
      "id": "root",
      "rules": [],
      "not": false
    },
    "orderby_dynamic": false,
    "orderby_dynamic_columns": [],
    "limit_dynamic": true,
    "offset_dynamic": true,
    "offset": 0,
    "limit": 100,
    "tables_used": [
      "public.rate_limit_tiers"
    ],
    "include_result_count": false,
    "columns": [
      {
        "columnName": "public.rate_limit_tiers.id",
        "alias": "id",
        "label": "id"
      },
      {
        "columnName": "public.rate_limit_tiers.tier_name",
        "alias": "tier_name",
        "label": "tier_name"
      },
      {
        "columnName": "public.rate_limit_tiers.usage_limit",
        "alias": "usage_limit",
        "label": "usage_limit"
      }
    ],
    "joins": [],
    "orderby": [],
    "condition_count": 0
  },
  "sqlmethod": "select",
  "querypaths": [],
  "auth_required": true,
  "base": "12991441"
}