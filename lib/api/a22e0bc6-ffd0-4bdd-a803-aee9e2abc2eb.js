module.exports = {
  "query_id": "a22e0bc6-ffd0-4bdd-a803-aee9e2abc2eb",
  "db_id": "2175387f-cff8-415f-a5e0-236cba1cea35",
  "route": "/geo_states_test",
  "method": "GET",
  "query_json": {
    "schema": "public",
    "table": "geo_states",
    "method": "select",
    "table_alias": "geo_states",
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
      "public.geo_states"
    ],
    "include_result_count": false,
    "columns": [
      {
        "columnName": "public.geo_states.address_count",
        "alias": "address_count",
        "label": "address_count"
      },
      {
        "columnName": "public.geo_states.address_count_new",
        "alias": "address_count_new",
        "label": "address_count_new"
      },
      {
        "columnName": "public.geo_states.country_id",
        "alias": "country_id",
        "label": "country_id"
      },
      {
        "columnName": "public.geo_states.created_at",
        "alias": "created_at",
        "label": "created_at"
      },
      {
        "columnName": "public.geo_states.id",
        "alias": "id",
        "label": "id"
      },
      {
        "columnName": "public.geo_states.name",
        "alias": "name",
        "label": "name"
      }
    ],
    "joins": [],
    "orderby": [],
    "condition_count": 0
  },
  "sqlmethod": "select",
  "querypaths": [],
  "auth_required": true,
  "base": "358673"
}