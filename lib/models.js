module.exports = {
  "models": {
    "public": {
      "user_exports": {
        "properties": {
          "schema_name": "public",
          "table_name": "user_exports",
          "columns": {
            "export_count": {
              "id": 2,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "user_id": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": false
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "EXTRACT(epoch FROM now())",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 13049489,
          "primary": [
            "id"
          ],
          "unique": [
            "id"
          ],
          "relations": {
            "user_id": "auth.su_app_id_to_user_id.user_id"
          },
          "referencedBy": {},
          "uindex": {
            "user_exports_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "export_count",
            "3": "user_id",
            "4": "created_at"
          },
          "rels": {
            "public.user_exports.user_id-auth.su_app_id_to_user_id.user_id": "M-1"
          },
          "rels_new": {
            "public.user_exports.user_id-auth.su_app_id_to_user_id.user_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id"
            }
          }
        }
      },
      "agent_prompt": {
        "properties": {
          "schema_name": "public",
          "table_name": "agent_prompt",
          "columns": {
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "prompt": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "updated_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "server_type": {
              "id": 4,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 13049372,
          "primary": [
            "id"
          ],
          "unique": [
            "id"
          ],
          "relations": {},
          "referencedBy": {},
          "uindex": {
            "agent_prompt_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "id",
            "prompt",
            "server_type"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "prompt",
            "3": "updated_at",
            "4": "server_type"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "subscription_invoice": {
        "properties": {
          "schema_name": "public",
          "table_name": "subscription_invoice",
          "columns": {
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "subscription_id": {
              "id": 2,
              "type": "uuid",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.subscriptions.id",
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "uuid",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "file_path": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 13049248,
          "primary": [
            "id"
          ],
          "unique": [
            "id"
          ],
          "relations": {
            "subscription_id": "public.subscriptions.id"
          },
          "referencedBy": {},
          "uindex": {
            "subscription_invoice_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "id",
            "file_path"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "subscription_id",
            "3": "file_path",
            "4": "created_at"
          },
          "rels": {
            "public.subscription_invoice.subscription_id-public.subscriptions.id": "M-1"
          },
          "rels_new": {
            "public.subscription_invoice.subscription_id-public.subscriptions.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "subscription"
            }
          }
        }
      },
      "people_role_designations": {
        "properties": {
          "schema_name": "public",
          "table_name": "people_role_designations",
          "columns": {
            "designation_id": {
              "id": 2,
              "type": "smallint",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "public.designations.rank",
              "unique": false
            },
            "people_role_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "public.people_roles.id",
              "unique": false
            }
          },
          "id": 13049179,
          "primary": [
            "people_role_id",
            "designation_id"
          ],
          "unique": [
            "designation_id",
            "people_role_id",
            "people_role_id",
            "designation_id"
          ],
          "relations": {
            "designation_id": "public.designations.rank",
            "people_role_id": "public.people_roles.id"
          },
          "referencedBy": {},
          "uindex": {
            "people_role_designations_pkey": [
              "designation_id",
              "people_role_id"
            ]
          },
          "notnulls": [
            "designation_id",
            "people_role_id"
          ],
          "serials": [],
          "idToName": {
            "1": "people_role_id",
            "2": "designation_id"
          },
          "rels": {
            "public.people_role_designations.designation_id-public.designations.rank": "M-1",
            "public.people_role_designations.people_role_id-public.people_roles.id": "M-1"
          },
          "rels_new": {
            "public.people_role_designations.designation_id-public.designations.rank": {
              "type": "M-1",
              "direct": "out",
              "alias": "designation_by_designation_id"
            },
            "public.people_role_designations.people_role_id-public.people_roles.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "people_role_by_people_role_id"
            }
          }
        }
      },
      "designations": {
        "properties": {
          "schema_name": "public",
          "table_name": "designations",
          "columns": {
            "rank": {
              "id": 1,
              "type": "smallint",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "designation_name": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 13049172,
          "primary": [
            "rank"
          ],
          "unique": [
            "rank"
          ],
          "relations": {},
          "referencedBy": {
            "rank": [
              "public.people_role_designations.designation_id"
            ]
          },
          "uindex": {
            "designations_pkey": [
              "rank"
            ]
          },
          "notnulls": [
            "rank",
            "designation_name"
          ],
          "serials": [],
          "idToName": {
            "1": "rank",
            "2": "designation_name"
          },
          "rels": {
            "public.designations.rank-public.people_role_designations.designation_id": "1-M"
          },
          "rels_new": {
            "public.designations.rank-public.people_role_designations.designation_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "people_role_designations"
            }
          }
        }
      },
      "webhook_logs": {
        "properties": {
          "schema_name": "public",
          "table_name": "webhook_logs",
          "columns": {
            "created_at": {
              "id": 4,
              "type": "timestamp without time zone",
              "default": "CURRENT_TIMESTAMP",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "event_type": {
              "id": 2,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "service": {
              "id": 6,
              "type": "character varying(255)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "integer",
              "default": "nextval('webhook_logs_id_seq'::regclass)",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "updated_at": {
              "id": 5,
              "type": "timestamp without time zone",
              "default": "CURRENT_TIMESTAMP",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "payload": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 13049162,
          "primary": [
            "id"
          ],
          "unique": [
            "id"
          ],
          "relations": {},
          "referencedBy": {},
          "uindex": {
            "webhook_logs_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "event_type",
            "id",
            "payload"
          ],
          "serials": [
            "id"
          ],
          "idToName": {
            "1": "id",
            "2": "event_type",
            "3": "payload",
            "4": "created_at",
            "5": "updated_at",
            "6": "service"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "subscriptions": {
        "properties": {
          "schema_name": "public",
          "table_name": "subscriptions",
          "columns": {
            "links": {
              "id": 27,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "paypal_subscription_id": {
              "id": 2,
              "type": "character varying(50)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "uuid",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "status": {
              "id": 3,
              "type": "character varying(20)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "status_update_time": {
              "id": 4,
              "type": "timestamp without time zone",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "plan_id": {
              "id": 5,
              "type": "character varying(50)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "start_time": {
              "id": 6,
              "type": "timestamp without time zone",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "quantity": {
              "id": 7,
              "type": "integer",
              "default": "1",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "create_time": {
              "id": 8,
              "type": "timestamp without time zone",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "update_time": {
              "id": 9,
              "type": "timestamp without time zone",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "plan_overridden": {
              "id": 10,
              "type": "boolean",
              "default": "false",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "subscriber": {
              "id": 11,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "outstanding_balance_currency": {
              "id": 12,
              "type": "character varying(3)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "outstanding_balance_value": {
              "id": 13,
              "type": "numeric(10,2)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "total_cycles": {
              "id": 19,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_payment_amount_currency": {
              "id": 20,
              "type": "character varying(3)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_payment_amount_value": {
              "id": 21,
              "type": "numeric(10,2)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_payment_time": {
              "id": 22,
              "type": "timestamp without time zone",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "next_billing_time": {
              "id": 23,
              "type": "timestamp without time zone",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "failed_payments_count": {
              "id": 24,
              "type": "integer",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "cycle": {
              "id": 25,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_id": {
              "id": 26,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": false
            }
          },
          "id": 13049143,
          "primary": [
            "id"
          ],
          "unique": [
            "paypal_subscription_id",
            "id"
          ],
          "relations": {
            "user_id": "auth.su_app_id_to_user_id.user_id"
          },
          "referencedBy": {
            "id": [
              "public.subscription_invoice.subscription_id"
            ]
          },
          "uindex": {
            "unique_paypal_subscription_id": [
              "paypal_subscription_id"
            ],
            "subscriptions_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "id",
            "status",
            "plan_id",
            "start_time",
            "quantity",
            "create_time",
            "plan_overridden",
            "user_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "paypal_subscription_id",
            "3": "status",
            "4": "status_update_time",
            "5": "plan_id",
            "6": "start_time",
            "7": "quantity",
            "8": "create_time",
            "9": "update_time",
            "10": "plan_overridden",
            "11": "subscriber",
            "12": "outstanding_balance_currency",
            "13": "outstanding_balance_value",
            "19": "total_cycles",
            "20": "last_payment_amount_currency",
            "21": "last_payment_amount_value",
            "22": "last_payment_time",
            "23": "next_billing_time",
            "24": "failed_payments_count",
            "25": "cycle",
            "26": "user_id",
            "27": "links"
          },
          "rels": {
            "public.subscriptions.id-public.subscription_invoice.subscription_id": "1-M",
            "public.subscriptions.user_id-auth.su_app_id_to_user_id.user_id": "M-1"
          },
          "rels_new": {
            "public.subscriptions.id-public.subscription_invoice.subscription_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "subscription_invoices"
            },
            "public.subscriptions.user_id-auth.su_app_id_to_user_id.user_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id"
            }
          }
        }
      },
      "domains": {
        "properties": {
          "schema_name": "public",
          "table_name": "domains",
          "columns": {
            "email_count": {
              "id": 4,
              "type": "smallint",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "entity_count": {
              "id": 2,
              "type": "smallint",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "alive": {
              "id": 5,
              "type": "boolean",
              "default": "true",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "entity_with_email_count": {
              "id": 3,
              "type": "smallint",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 13003347,
          "primary": [
            "name"
          ],
          "unique": [
            "name"
          ],
          "relations": {},
          "referencedBy": {
            "name": [
              "public.emails.domain",
              "public.entities.domain"
            ]
          },
          "uindex": {
            "domains_pkey": [
              "name"
            ]
          },
          "notnulls": [
            "name"
          ],
          "serials": [],
          "idToName": {
            "1": "name",
            "2": "entity_count",
            "3": "entity_with_email_count",
            "4": "email_count",
            "5": "alive"
          },
          "rels": {
            "public.domains.name-public.emails.domain": "1-M",
            "public.domains.name-public.entities.domain": "1-M"
          },
          "rels_new": {
            "public.domains.name-public.emails.domain": {
              "type": "1-M",
              "direct": "in",
              "alias": "emails"
            },
            "public.domains.name-public.entities.domain": {
              "type": "1-M",
              "direct": "in",
              "alias": "entities"
            }
          }
        }
      },
      "unlocked_contacts": {
        "properties": {
          "schema_name": "public",
          "table_name": "unlocked_contacts",
          "columns": {
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_by": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": true
            },
            "person_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.people.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 13002808,
          "primary": [
            "id"
          ],
          "unique": [
            "created_by",
            "person_id",
            "person_id",
            "created_by",
            "id"
          ],
          "relations": {
            "person_id": "public.people.id",
            "created_by": "auth.su_app_id_to_user_id.user_id"
          },
          "referencedBy": {},
          "uindex": {
            "unlocked_contacts_created_by_person_id_key": [
              "created_by",
              "person_id"
            ],
            "unlocked_contacts_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "person_id",
            "3": "created_by",
            "4": "created_at"
          },
          "rels": {
            "public.unlocked_contacts.person_id-public.people.id": "M-1",
            "public.unlocked_contacts.created_by-auth.su_app_id_to_user_id.user_id": "M-1"
          },
          "rels_new": {
            "public.unlocked_contacts.person_id-public.people.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "person"
            },
            "public.unlocked_contacts.created_by-auth.su_app_id_to_user_id.user_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id"
            }
          }
        }
      },
      "subscription_plans": {
        "properties": {
          "schema_name": "public",
          "table_name": "subscription_plans",
          "columns": {
            "status": {
              "id": 18,
              "type": "character varying(20)",
              "default": "'ACTIVE'::character varying",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "total_cycles": {
              "id": 14,
              "type": "integer",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "payment_failure_threshold": {
              "id": 15,
              "type": "integer",
              "default": "3",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "auto_bill_outstanding": {
              "id": 16,
              "type": "boolean",
              "default": "true",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "setup_fee_failure_action": {
              "id": 17,
              "type": "character varying(20)",
              "default": "'CONTINUE'::character varying",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "billing_cycle_unit": {
              "id": 13,
              "type": "character varying(20)",
              "default": "'MONTH'::character varying",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "is_featured": {
              "id": 19,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "paypal_plan_id": {
              "id": 3,
              "type": "character varying(100)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "uuid",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "sort_order": {
              "id": 20,
              "type": "integer",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 21,
              "type": "bigint",
              "default": "(EXTRACT(epoch FROM CURRENT_TIMESTAMP))::bigint",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "product_id": {
              "id": 2,
              "type": "uuid",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.subscription_plans.id",
              "unique": false
            },
            "plan_type": {
              "id": 6,
              "type": "character varying(50)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "description": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 4,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "monthly_price": {
              "id": 7,
              "type": "numeric(10,2)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "currency": {
              "id": 8,
              "type": "character varying(3)",
              "default": "'USD'::character varying",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "setup_fee": {
              "id": 9,
              "type": "numeric(10,2)",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "trial_days": {
              "id": 10,
              "type": "integer",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "trial_price": {
              "id": 11,
              "type": "numeric(10,2)",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "billing_cycle_interval": {
              "id": 12,
              "type": "integer",
              "default": "1",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 13002596,
          "primary": [
            "id"
          ],
          "unique": [
            "paypal_plan_id",
            "id"
          ],
          "relations": {
            "product_id": "public.subscription_plans.id"
          },
          "referencedBy": {
            "id": [
              "public.subscription_plans.product_id"
            ]
          },
          "uindex": {
            "subscription_plans_paypal_plan_id_key": [
              "paypal_plan_id"
            ],
            "subscription_plans_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "paypal_plan_id",
            "id",
            "product_id",
            "plan_type",
            "name",
            "monthly_price"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "product_id",
            "3": "paypal_plan_id",
            "4": "name",
            "5": "description",
            "6": "plan_type",
            "7": "monthly_price",
            "8": "currency",
            "9": "setup_fee",
            "10": "trial_days",
            "11": "trial_price",
            "12": "billing_cycle_interval",
            "13": "billing_cycle_unit",
            "14": "total_cycles",
            "15": "payment_failure_threshold",
            "16": "auto_bill_outstanding",
            "17": "setup_fee_failure_action",
            "18": "status",
            "19": "is_featured",
            "20": "sort_order",
            "21": "created_at"
          },
          "rels": {
            "public.subscription_plans.product_id-public.subscription_plans.id": "M-1",
            "public.subscription_plans.id-public.subscription_plans.product_id": "1-M"
          },
          "rels_new": {
            "public.subscription_plans.product_id-public.subscription_plans.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "subscription_plan_by_product_id"
            },
            "public.subscription_plans.id-public.subscription_plans.product_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "subscription_plans_by_product_id"
            }
          }
        }
      },
      "subscription_products": {
        "properties": {
          "schema_name": "public",
          "table_name": "subscription_products",
          "columns": {
            "description": {
              "id": 4,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "uuid",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at": {
              "id": 10,
              "type": "bigint",
              "default": "(EXTRACT(epoch FROM CURRENT_TIMESTAMP))::bigint",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "is_active": {
              "id": 9,
              "type": "boolean",
              "default": "true",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "home_url": {
              "id": 8,
              "type": "character varying(500)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "image_url": {
              "id": 7,
              "type": "character varying(500)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "category": {
              "id": 6,
              "type": "character varying(100)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "type": {
              "id": 5,
              "type": "character varying(50)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "paypal_product_id": {
              "id": 2,
              "type": "character varying(500)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "name": {
              "id": 3,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 13002584,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "paypal_product_id"
          ],
          "relations": {},
          "referencedBy": {},
          "uindex": {
            "subscription_products_pkey": [
              "id"
            ],
            "subscription_products_paypal_product_id_key": [
              "paypal_product_id"
            ]
          },
          "notnulls": [
            "id",
            "category",
            "type",
            "paypal_product_id",
            "name"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "paypal_product_id",
            "3": "name",
            "4": "description",
            "5": "type",
            "6": "category",
            "7": "image_url",
            "8": "home_url",
            "9": "is_active",
            "10": "created_at"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "city_country_temp": {
        "properties": {
          "schema_name": "public",
          "table_name": "city_country_temp",
          "columns": {
            "country_count": {
              "id": 2,
              "type": "smallint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "correct_city_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_cities.id",
              "unique": false
            }
          },
          "id": 13002134,
          "primary": [],
          "unique": [
            "name"
          ],
          "relations": {
            "correct_city_id": "public.geo_cities.id"
          },
          "referencedBy": {},
          "uindex": {
            "city_country_temp_name_key": [
              "name"
            ]
          },
          "notnulls": [
            "name"
          ],
          "serials": [],
          "idToName": {
            "1": "name",
            "2": "country_count",
            "3": "correct_city_id"
          },
          "rels": {
            "public.city_country_temp.correct_city_id-public.geo_cities.id": "M-1"
          },
          "rels_new": {
            "public.city_country_temp.correct_city_id-public.geo_cities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_city"
            }
          }
        }
      },
      "geo_cities": {
        "properties": {
          "schema_name": "public",
          "table_name": "geo_cities",
          "columns": {
            "address_count": {
              "id": 6,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "state_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_states.id",
              "unique": true
            },
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "replace_state_id": {
              "id": 8,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_states.id",
              "unique": false
            },
            "replace_city_id": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_cities.id",
              "unique": false
            },
            "address_count_new": {
              "id": 9,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 13000668,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "state_id",
            "name",
            "state_id"
          ],
          "relations": {
            "state_id": "public.geo_states.id",
            "replace_state_id": "public.geo_states.id",
            "replace_city_id": "public.geo_cities.id"
          },
          "referencedBy": {
            "id": [
              "public.city_country_temp.correct_city_id",
              "public.geo_cities.replace_city_id",
              "public.addresses.city_id",
              "public.addresses.city_id_new"
            ]
          },
          "uindex": {
            "geo_cities_pkey": [
              "id"
            ],
            "geo_cities_name_state_id_key": [
              "state_id",
              "name"
            ]
          },
          "notnulls": [
            "id",
            "name"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "state_id",
            "4": "created_at",
            "6": "address_count",
            "7": "replace_city_id",
            "8": "replace_state_id",
            "9": "address_count_new"
          },
          "rels": {
            "public.geo_cities.id-public.city_country_temp.correct_city_id": "1-M",
            "public.geo_cities.state_id-public.geo_states.id": "M-1",
            "public.geo_cities.replace_state_id-public.geo_states.id": "M-1",
            "public.geo_cities.replace_city_id-public.geo_cities.id": "M-1",
            "public.geo_cities.id-public.geo_cities.replace_city_id": "1-M",
            "public.geo_cities.id-public.addresses.city_id": "1-M",
            "public.geo_cities.id-public.addresses.city_id_new": "1-M"
          },
          "rels_new": {
            "public.geo_cities.id-public.city_country_temp.correct_city_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "city_country_temps"
            },
            "public.geo_cities.state_id-public.geo_states.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_state_by_state_id"
            },
            "public.geo_cities.replace_state_id-public.geo_states.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_state_by_replace_state_id"
            },
            "public.geo_cities.replace_city_id-public.geo_cities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_city_by_replace_city_id"
            },
            "public.geo_cities.id-public.geo_cities.replace_city_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "geo_cities_by_replace_city_id"
            },
            "public.geo_cities.id-public.addresses.city_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "addresses_by_city_id"
            },
            "public.geo_cities.id-public.addresses.city_id_new": {
              "type": "1-M",
              "direct": "in",
              "alias": "addresses_by_city_id_new"
            }
          }
        }
      },
      "organization_invitations": {
        "properties": {
          "schema_name": "public",
          "table_name": "organization_invitations",
          "columns": {
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "accepted_at": {
              "id": 8,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 6,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "invited_email": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "invited_by": {
              "id": 5,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": false
            },
            "organization_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.organizations.id",
              "unique": false
            },
            "accepted_by": {
              "id": 7,
              "type": "character(36)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": false
            },
            "status": {
              "id": 9,
              "type": "text",
              "default": "'pending'::text",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "meta_data": {
              "id": 10,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "token": {
              "id": 4,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 13000493,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "token"
          ],
          "relations": {
            "invited_by": "auth.su_app_id_to_user_id.user_id",
            "organization_id": "public.organizations.id",
            "accepted_by": "auth.su_app_id_to_user_id.user_id"
          },
          "referencedBy": {},
          "uindex": {
            "organization_invitations_pkey": [
              "id"
            ],
            "organization_invitations_token_key": [
              "token"
            ]
          },
          "notnulls": [
            "id",
            "created_at",
            "invited_email",
            "invited_by",
            "organization_id",
            "token"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "organization_id",
            "3": "invited_email",
            "4": "token",
            "5": "invited_by",
            "6": "created_at",
            "7": "accepted_by",
            "8": "accepted_at",
            "9": "status",
            "10": "meta_data"
          },
          "rels": {
            "public.organization_invitations.invited_by-auth.su_app_id_to_user_id.user_id": "M-1",
            "public.organization_invitations.organization_id-public.organizations.id": "M-1",
            "public.organization_invitations.accepted_by-auth.su_app_id_to_user_id.user_id": "M-1"
          },
          "rels_new": {
            "public.organization_invitations.invited_by-auth.su_app_id_to_user_id.user_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_invited_by"
            },
            "public.organization_invitations.organization_id-public.organizations.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "organization"
            },
            "public.organization_invitations.accepted_by-auth.su_app_id_to_user_id.user_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_accepted_by"
            }
          }
        }
      },
      "organization_members": {
        "properties": {
          "schema_name": "public",
          "table_name": "organization_members",
          "columns": {
            "user_id": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": true
            },
            "organization_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.organizations.id",
              "unique": true
            },
            "invited_by": {
              "id": 6,
              "type": "character(36)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": false
            },
            "joined_at": {
              "id": 5,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "role": {
              "id": 4,
              "type": "text",
              "default": "'member'::text",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "status": {
              "id": 7,
              "type": "text",
              "default": "'active'::text",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 13000463,
          "primary": [
            "id"
          ],
          "unique": [
            "user_id",
            "organization_id",
            "organization_id",
            "user_id",
            "id"
          ],
          "relations": {
            "organization_id": "public.organizations.id",
            "user_id": "auth.su_app_id_to_user_id.user_id",
            "invited_by": "auth.su_app_id_to_user_id.user_id"
          },
          "referencedBy": {},
          "uindex": {
            "organization_members_unique": [
              "user_id",
              "organization_id"
            ],
            "organization_members_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "user_id",
            "organization_id",
            "joined_at",
            "id",
            "role"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "organization_id",
            "3": "user_id",
            "4": "role",
            "5": "joined_at",
            "6": "invited_by",
            "7": "status"
          },
          "rels": {
            "public.organization_members.organization_id-public.organizations.id": "M-1",
            "public.organization_members.user_id-auth.su_app_id_to_user_id.user_id": "M-1",
            "public.organization_members.invited_by-auth.su_app_id_to_user_id.user_id": "M-1"
          },
          "rels_new": {
            "public.organization_members.organization_id-public.organizations.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "organization"
            },
            "public.organization_members.user_id-auth.su_app_id_to_user_id.user_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_user_id"
            },
            "public.organization_members.invited_by-auth.su_app_id_to_user_id.user_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_invited_by"
            }
          }
        }
      },
      "organizations": {
        "properties": {
          "schema_name": "public",
          "table_name": "organizations",
          "columns": {
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "updated_at": {
              "id": 5,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "settings": {
              "id": 6,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_by": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 13000448,
          "primary": [
            "id"
          ],
          "unique": [
            "id"
          ],
          "relations": {
            "created_by": "auth.su_app_id_to_user_id.user_id"
          },
          "referencedBy": {
            "id": [
              "public.organization_invitations.organization_id",
              "public.organization_members.organization_id"
            ]
          },
          "uindex": {
            "organizations_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "created_at",
            "created_by",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "created_by",
            "4": "created_at",
            "5": "updated_at",
            "6": "settings"
          },
          "rels": {
            "public.organizations.id-public.organization_invitations.organization_id": "1-M",
            "public.organizations.id-public.organization_members.organization_id": "1-M",
            "public.organizations.created_by-auth.su_app_id_to_user_id.user_id": "M-1"
          },
          "rels_new": {
            "public.organizations.id-public.organization_invitations.organization_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "organization_invitations"
            },
            "public.organizations.id-public.organization_members.organization_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "organization_members"
            },
            "public.organizations.created_by-auth.su_app_id_to_user_id.user_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id"
            }
          }
        }
      },
      "user_meta": {
        "properties": {
          "schema_name": "public",
          "table_name": "user_meta",
          "columns": {
            "updated_at": {
              "id": 8,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "location": {
              "id": 9,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_id": {
              "id": 2,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "tier_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.rate_limit_tiers.id",
              "unique": false
            },
            "country_code": {
              "id": 10,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_countries.country_code",
              "unique": false
            },
            "start_date": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "end_date": {
              "id": 5,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "is_active": {
              "id": 6,
              "type": "boolean",
              "default": "true",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 7,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 12991451,
          "primary": [
            "id"
          ],
          "unique": [
            "user_id",
            "user_id",
            "id"
          ],
          "relations": {
            "user_id": "auth.su_app_id_to_user_id.user_id",
            "tier_id": "public.rate_limit_tiers.id",
            "country_code": "public.geo_countries.country_code"
          },
          "referencedBy": {},
          "uindex": {
            "user_meta_user_id_key": [
              "user_id"
            ],
            "user_meta_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "user_id",
            "id",
            "tier_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "user_id",
            "3": "tier_id",
            "4": "start_date",
            "5": "end_date",
            "6": "is_active",
            "7": "created_at",
            "8": "updated_at",
            "9": "location",
            "10": "country_code"
          },
          "rels": {
            "public.user_meta.user_id-auth.su_app_id_to_user_id.user_id": "1-1",
            "public.user_meta.tier_id-public.rate_limit_tiers.id": "M-1",
            "public.user_meta.country_code-public.geo_countries.country_code": "M-1"
          },
          "rels_new": {
            "public.user_meta.user_id-auth.su_app_id_to_user_id.user_id": {
              "type": "1-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id"
            },
            "public.user_meta.tier_id-public.rate_limit_tiers.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "rate_limit_tier"
            },
            "public.user_meta.country_code-public.geo_countries.country_code": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_country"
            }
          }
        }
      },
      "rate_limit_tiers": {
        "properties": {
          "schema_name": "public",
          "table_name": "rate_limit_tiers",
          "columns": {
            "usage_limit": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "skip_rate_limit": {
              "id": 5,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "tier_name": {
              "id": 2,
              "type": "character varying(50)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 12991441,
          "primary": [
            "id"
          ],
          "unique": [
            "tier_name",
            "id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.user_meta.tier_id"
            ]
          },
          "uindex": {
            "rate_limit_tiers_tier_name_key": [
              "tier_name"
            ],
            "rate_limit_tiers_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "tier_name",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "tier_name",
            "3": "usage_limit",
            "5": "skip_rate_limit"
          },
          "rels": {
            "public.rate_limit_tiers.id-public.user_meta.tier_id": "1-M"
          },
          "rels_new": {
            "public.rate_limit_tiers.id-public.user_meta.tier_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "user_metas"
            }
          }
        }
      },
      "api_logs": {
        "properties": {
          "schema_name": "public",
          "table_name": "api_logs",
          "columns": {
            "endpoint_type": {
              "id": 4,
              "type": "character varying(100)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "processing_time": {
              "id": 9,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 10,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "ip": {
              "id": 11,
              "type": "character varying(100)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "endpoint": {
              "id": 3,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "method": {
              "id": 5,
              "type": "character varying(10)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "status_code": {
              "id": 6,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "request_body": {
              "id": 7,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "request_query": {
              "id": 8,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "mac": {
              "id": 12,
              "type": "character varying(100)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_id": {
              "id": 2,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": false
            }
          },
          "id": 12991426,
          "primary": [
            "id"
          ],
          "unique": [
            "id"
          ],
          "relations": {
            "user_id": "auth.su_app_id_to_user_id.user_id"
          },
          "referencedBy": {},
          "uindex": {
            "api_logs_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "endpoint_type",
            "id",
            "endpoint",
            "method",
            "user_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "user_id",
            "3": "endpoint",
            "4": "endpoint_type",
            "5": "method",
            "6": "status_code",
            "7": "request_body",
            "8": "request_query",
            "9": "processing_time",
            "10": "created_at",
            "11": "ip",
            "12": "mac"
          },
          "rels": {
            "public.api_logs.user_id-auth.su_app_id_to_user_id.user_id": "M-1"
          },
          "rels_new": {
            "public.api_logs.user_id-auth.su_app_id_to_user_id.user_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id"
            }
          }
        }
      },
      "me_sectors": {
        "properties": {
          "schema_name": "public",
          "table_name": "me_sectors",
          "columns": {
            "me_id": {
              "id": 1,
              "type": "integer",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "name": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 12979979,
          "primary": [
            "me_id"
          ],
          "unique": [
            "me_id"
          ],
          "relations": {},
          "referencedBy": {},
          "uindex": {
            "me_sectors_pkey": [
              "me_id"
            ]
          },
          "notnulls": [
            "me_id",
            "name"
          ],
          "serials": [],
          "idToName": {
            "1": "me_id",
            "2": "name"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "me_geo": {
        "properties": {
          "schema_name": "public",
          "table_name": "me_geo",
          "columns": {
            "me_id": {
              "id": 1,
              "type": "integer",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "name": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 12979972,
          "primary": [
            "me_id"
          ],
          "unique": [
            "me_id"
          ],
          "relations": {},
          "referencedBy": {},
          "uindex": {
            "me_geo_pkey": [
              "me_id"
            ]
          },
          "notnulls": [
            "me_id",
            "name"
          ],
          "serials": [],
          "idToName": {
            "1": "me_id",
            "2": "name"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "me_contacts": {
        "properties": {
          "schema_name": "public",
          "table_name": "me_contacts",
          "columns": {
            "fc_id": {
              "id": 2,
              "type": "integer",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "email": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "data": {
              "id": 3,
              "type": "json",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "people_id": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.people.id",
              "unique": false
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "f_id": {
              "id": 6,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 12979930,
          "primary": [
            "id"
          ],
          "unique": [
            "fc_id",
            "id",
            "email"
          ],
          "relations": {
            "people_id": "public.people.id"
          },
          "referencedBy": {},
          "uindex": {
            "me_contacts_fc_id_key": [
              "fc_id"
            ],
            "me_contacts_pkey": [
              "id"
            ],
            "me_contacts_email_key": [
              "email"
            ]
          },
          "notnulls": [
            "fc_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "fc_id",
            "3": "data",
            "4": "created_at",
            "5": "email",
            "6": "f_id",
            "7": "people_id"
          },
          "rels": {
            "public.me_contacts.people_id-public.people.id": "M-1"
          },
          "rels_new": {
            "public.me_contacts.people_id-public.people.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "person"
            }
          }
        }
      },
      "me_firms": {
        "properties": {
          "schema_name": "public",
          "table_name": "me_firms",
          "columns": {
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "data": {
              "id": 3,
              "type": "json",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "entity_id_from_pbid_match": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": false
            },
            "temp_flag": {
              "id": 6,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "f_id": {
              "id": 2,
              "type": "integer",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 12979919,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "f_id"
          ],
          "relations": {
            "entity_id_from_pbid_match": "public.entities.id"
          },
          "referencedBy": {},
          "uindex": {
            "me_firms_pkey": [
              "id"
            ],
            "me_firms_f_id_key": [
              "f_id"
            ]
          },
          "notnulls": [
            "id",
            "f_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "f_id",
            "3": "data",
            "4": "created_at",
            "5": "entity_id_from_pbid_match",
            "6": "temp_flag"
          },
          "rels": {
            "public.me_firms.entity_id_from_pbid_match-public.entities.id": "M-1"
          },
          "rels_new": {
            "public.me_firms.entity_id_from_pbid_match-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity"
            }
          }
        }
      },
      "data_source": {
        "properties": {
          "schema_name": "public",
          "table_name": "data_source",
          "columns": {
            "name": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 12979805,
          "primary": [
            "id"
          ],
          "unique": [
            "name",
            "id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.emails.source",
              "public.people_roles.source",
              "public.people.source",
              "public.entities.source"
            ]
          },
          "uindex": {
            "data_source_name_key": [
              "name"
            ],
            "data_source_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "name",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name"
          },
          "rels": {
            "public.data_source.id-public.emails.source": "1-M",
            "public.data_source.id-public.people_roles.source": "1-M",
            "public.data_source.id-public.people.source": "1-M",
            "public.data_source.id-public.entities.source": "1-M"
          },
          "rels_new": {
            "public.data_source.id-public.emails.source": {
              "type": "1-M",
              "direct": "in",
              "alias": "emails"
            },
            "public.data_source.id-public.people_roles.source": {
              "type": "1-M",
              "direct": "in",
              "alias": "people_roles"
            },
            "public.data_source.id-public.people.source": {
              "type": "1-M",
              "direct": "in",
              "alias": "people"
            },
            "public.data_source.id-public.entities.source": {
              "type": "1-M",
              "direct": "in",
              "alias": "entities"
            }
          }
        }
      },
      "list_people_ids": {
        "properties": {
          "schema_name": "public",
          "table_name": "list_people_ids",
          "columns": {
            "list_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.lists.id",
              "unique": true
            },
            "people_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.people.id",
              "unique": true
            },
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 4,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 12979651,
          "primary": [
            "id"
          ],
          "unique": [
            "list_id",
            "people_id",
            "list_id",
            "id",
            "people_id"
          ],
          "relations": {
            "list_id": "public.lists.id",
            "people_id": "public.people.id"
          },
          "referencedBy": {},
          "uindex": {
            "list_people_ids_list_id_people_id_key": [
              "list_id",
              "people_id"
            ],
            "list_people_ids_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "list_id",
            "people_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "list_id",
            "2": "people_id",
            "3": "created_at",
            "4": "id"
          },
          "rels": {
            "public.list_people_ids.list_id-public.lists.id": "M-1",
            "public.list_people_ids.people_id-public.people.id": "M-1"
          },
          "rels_new": {
            "public.list_people_ids.list_id-public.lists.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "list"
            },
            "public.list_people_ids.people_id-public.people.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "person"
            }
          }
        }
      },
      "llm_messages": {
        "properties": {
          "schema_name": "public",
          "table_name": "llm_messages",
          "columns": {
            "type": {
              "id": 8,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "content": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "llm_message_id": {
              "id": 6,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 5,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "filters": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "role": {
              "id": 2,
              "type": "character varying(255)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "bigint",
              "default": "nextval('llm_messages_id_seq'::regclass)",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "chat_id": {
              "id": 4,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.llm_chat.id",
              "unique": false
            },
            "tool_input": {
              "id": 12,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "tool_used_id": {
              "id": 11,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "tool_data": {
              "id": 10,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "tool_used": {
              "id": 9,
              "type": "character varying(255)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 12979602,
          "primary": [
            "id"
          ],
          "unique": [
            "id"
          ],
          "relations": {
            "chat_id": "public.llm_chat.id"
          },
          "referencedBy": {},
          "uindex": {
            "llm_messages_pimary_key": [
              "id"
            ]
          },
          "notnulls": [
            "created_at",
            "id"
          ],
          "serials": [
            "id"
          ],
          "idToName": {
            "1": "id",
            "2": "role",
            "3": "filters",
            "4": "chat_id",
            "5": "created_at",
            "6": "llm_message_id",
            "7": "content",
            "8": "type",
            "9": "tool_used",
            "10": "tool_data",
            "11": "tool_used_id",
            "12": "tool_input"
          },
          "rels": {
            "public.llm_messages.chat_id-public.llm_chat.id": "M-1"
          },
          "rels_new": {
            "public.llm_messages.chat_id-public.llm_chat.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "llm_chat"
            }
          }
        }
      },
      "portfolio_industries": {
        "properties": {
          "schema_name": "public",
          "table_name": "portfolio_industries",
          "columns": {
            "industry_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.industries.id",
              "unique": true
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "entity_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 12978580,
          "primary": [
            "id"
          ],
          "unique": [
            "entity_id",
            "industry_id",
            "industry_id",
            "entity_id",
            "id",
            "industry_id",
            "entity_id"
          ],
          "relations": {
            "industry_id": "public.industries.id",
            "entity_id": "public.entities.id"
          },
          "referencedBy": {},
          "uindex": {
            "portfolio_industries_industry_id_entity_id_key": [
              "entity_id",
              "industry_id"
            ],
            "portfolio_industries_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "industry_id",
            "entity_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "industry_id",
            "3": "entity_id",
            "4": "created_at"
          },
          "rels": {
            "public.portfolio_industries.industry_id-public.industries.id": "M-1",
            "public.portfolio_industries.entity_id-public.entities.id": "M-1"
          },
          "rels_new": {
            "public.portfolio_industries.industry_id-public.industries.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "industry_by_industry_id"
            },
            "public.portfolio_industries.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_entity_id"
            }
          }
        }
      },
      "portfolio_countries": {
        "properties": {
          "schema_name": "public",
          "table_name": "portfolio_countries",
          "columns": {
            "country_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_countries.id",
              "unique": true
            },
            "entity_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 12978559,
          "primary": [
            "id"
          ],
          "unique": [
            "country_id",
            "entity_id",
            "id",
            "entity_id",
            "entity_id",
            "country_id",
            "country_id"
          ],
          "relations": {
            "country_id": "public.geo_countries.id",
            "entity_id": "public.entities.id"
          },
          "referencedBy": {},
          "uindex": {
            "portfolio_countries_country_id_entity_id_key": [
              "country_id",
              "entity_id"
            ],
            "portfolio_countries_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "country_id",
            "entity_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "country_id",
            "3": "entity_id",
            "4": "created_at"
          },
          "rels": {
            "public.portfolio_countries.country_id-public.geo_countries.id": "M-1",
            "public.portfolio_countries.entity_id-public.entities.id": "M-1"
          },
          "rels_new": {
            "public.portfolio_countries.country_id-public.geo_countries.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_country_by_country_id"
            },
            "public.portfolio_countries.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_entity_id"
            }
          }
        }
      },
      "llm_messages_bug": {
        "properties": {
          "schema_name": "public",
          "table_name": "llm_messages_bug",
          "columns": {
            "tool_used": {
              "id": 10,
              "type": "character varying(255)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "chat_id": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.llm_chat.id",
              "unique": false
            },
            "tool_input": {
              "id": 13,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "tool_used_id": {
              "id": 12,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "tool_data": {
              "id": 11,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "type": {
              "id": 9,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "content": {
              "id": 8,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "llm_message_id": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 6,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "filters": {
              "id": 4,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "role": {
              "id": 3,
              "type": "character varying(255)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 17,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 12978533,
          "primary": [
            "id"
          ],
          "unique": [
            "id"
          ],
          "relations": {
            "chat_id": "public.llm_chat.id"
          },
          "referencedBy": {},
          "uindex": {
            "llm_messages_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "created_at",
            "id"
          ],
          "serials": [],
          "idToName": {
            "3": "role",
            "4": "filters",
            "5": "chat_id",
            "6": "created_at",
            "7": "llm_message_id",
            "8": "content",
            "9": "type",
            "10": "tool_used",
            "11": "tool_data",
            "12": "tool_used_id",
            "13": "tool_input",
            "17": "id"
          },
          "rels": {
            "public.llm_messages_bug.chat_id-public.llm_chat.id": "M-1"
          },
          "rels_new": {
            "public.llm_messages_bug.chat_id-public.llm_chat.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "llm_chat"
            }
          }
        }
      },
      "portfolio_keywords": {
        "properties": {
          "schema_name": "public",
          "table_name": "portfolio_keywords",
          "columns": {
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "keyword": {
              "id": 3,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.keywords.keyword",
              "unique": false
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 12978241,
          "primary": [],
          "unique": [
            "entity_id",
            "keyword",
            "entity_id",
            "entity_id",
            "keyword",
            "keyword"
          ],
          "relations": {
            "entity_id": "public.entities.id",
            "keyword": "public.keywords.keyword"
          },
          "referencedBy": {},
          "uindex": {
            "portfolio_keywords_entity_id_keyword_key": [
              "entity_id",
              "keyword"
            ]
          },
          "notnulls": [
            "entity_id",
            "keyword",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "entity_id",
            "3": "keyword",
            "4": "created_at"
          },
          "rels": {
            "public.portfolio_keywords.entity_id-public.entities.id": "M-1",
            "public.portfolio_keywords.keyword-public.keywords.keyword": "M-1"
          },
          "rels_new": {
            "public.portfolio_keywords.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_entity_id"
            },
            "public.portfolio_keywords.keyword-public.keywords.keyword": {
              "type": "M-1",
              "direct": "out",
              "alias": "keyword_by_keyword"
            }
          }
        }
      },
      "list_entity_ids": {
        "properties": {
          "schema_name": "public",
          "table_name": "list_entity_ids",
          "columns": {
            "id": {
              "id": 8,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "list_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.lists.id",
              "unique": true
            },
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 12091532,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "list_id",
            "entity_id",
            "entity_id",
            "list_id"
          ],
          "relations": {
            "entity_id": "public.entities.id",
            "list_id": "public.lists.id"
          },
          "referencedBy": {},
          "uindex": {
            "list_entity_ids_pkey": [
              "id"
            ],
            "list_entity_ids_list_id_entity_id_key": [
              "list_id",
              "entity_id"
            ]
          },
          "notnulls": [
            "id",
            "list_id",
            "entity_id"
          ],
          "serials": [],
          "idToName": {
            "1": "list_id",
            "2": "entity_id",
            "3": "created_at",
            "8": "id"
          },
          "rels": {
            "public.list_entity_ids.entity_id-public.entities.id": "M-1",
            "public.list_entity_ids.list_id-public.lists.id": "M-1"
          },
          "rels_new": {
            "public.list_entity_ids.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity"
            },
            "public.list_entity_ids.list_id-public.lists.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "list"
            }
          }
        }
      },
      "lists": {
        "properties": {
          "schema_name": "public",
          "table_name": "lists",
          "columns": {
            "created_by": {
              "id": 5,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "name": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "is_people": {
              "id": 10,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "list_type": {
              "id": 9,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "updated_at": {
              "id": 7,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 6,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "notes": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 11733081,
          "primary": [
            "id"
          ],
          "unique": [
            "id"
          ],
          "relations": {
            "created_by": "auth.su_app_id_to_user_id.user_id"
          },
          "referencedBy": {
            "id": [
              "public.list_people_ids.list_id",
              "public.list_entity_ids.list_id"
            ]
          },
          "uindex": {
            "lists_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "created_by",
            "id",
            "name",
            "created_at"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "notes",
            "5": "created_by",
            "6": "created_at",
            "7": "updated_at",
            "9": "list_type",
            "10": "is_people"
          },
          "rels": {
            "public.lists.id-public.list_people_ids.list_id": "1-M",
            "public.lists.id-public.list_entity_ids.list_id": "1-M",
            "public.lists.created_by-auth.su_app_id_to_user_id.user_id": "M-1"
          },
          "rels_new": {
            "public.lists.id-public.list_people_ids.list_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "list_people_ids"
            },
            "public.lists.id-public.list_entity_ids.list_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "list_entity_ids"
            },
            "public.lists.created_by-auth.su_app_id_to_user_id.user_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id"
            }
          }
        }
      },
      "entity_scraping": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_scraping",
          "columns": {
            "entity_id": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "created_at": {
              "id": 6,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "data": {
              "id": 4,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "error": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "status": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "uuid",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 11728623,
          "primary": [
            "id"
          ],
          "unique": [
            "entity_id",
            "id",
            "entity_id"
          ],
          "relations": {
            "entity_id": "public.entities.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_id_unique": [
              "entity_id"
            ],
            "entity_scraping_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "status",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "status",
            "3": "error",
            "4": "data",
            "5": "entity_id",
            "6": "created_at"
          },
          "rels": {
            "public.entity_scraping.entity_id-public.entities.id": "1-1"
          },
          "rels_new": {
            "public.entity_scraping.entity_id-public.entities.id": {
              "type": "1-1",
              "direct": "out",
              "alias": "entity"
            }
          }
        }
      },
      "entity_lp_fund_type_pref": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_lp_fund_type_pref",
          "columns": {
            "entity_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "fund_type_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.fund_types.id",
              "unique": true
            }
          },
          "id": 11728592,
          "primary": [
            "entity_id"
          ],
          "unique": [
            "entity_id",
            "entity_id",
            "fund_type_id",
            "entity_id",
            "entity_id",
            "fund_type_id",
            "entity_id",
            "entity_id"
          ],
          "relations": {
            "entity_id": "public.entities.id",
            "fund_type_id": "public.fund_types.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_lp_fund_type_pref_pkey": [
              "entity_id"
            ],
            "entity_lp_fund_type_pref_entity_id_fund_type_id_key": [
              "fund_type_id",
              "entity_id"
            ]
          },
          "notnulls": [
            "entity_id"
          ],
          "serials": [],
          "idToName": {
            "1": "entity_id",
            "2": "fund_type_id"
          },
          "rels": {
            "public.entity_lp_fund_type_pref.entity_id-public.entities.id": "M-1",
            "public.entity_lp_fund_type_pref.fund_type_id-public.fund_types.id": "M-1"
          },
          "rels_new": {
            "public.entity_lp_fund_type_pref.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_entity_id"
            },
            "public.entity_lp_fund_type_pref.fund_type_id-public.fund_types.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "fund_type"
            }
          }
        }
      },
      "entity_lp_types": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_lp_types",
          "columns": {
            "entity_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "lp_type_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.lp_types.id",
              "unique": true
            }
          },
          "id": 11728573,
          "primary": [
            "entity_id"
          ],
          "unique": [
            "entity_id",
            "entity_id",
            "entity_id",
            "lp_type_id",
            "entity_id",
            "entity_id",
            "lp_type_id",
            "entity_id"
          ],
          "relations": {
            "entity_id": "public.entities.id",
            "lp_type_id": "public.lp_types.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_lp_types_pkey": [
              "entity_id"
            ],
            "entity_lp_types_entity_id_lp_type_id_key": [
              "entity_id",
              "lp_type_id"
            ]
          },
          "notnulls": [
            "entity_id"
          ],
          "serials": [],
          "idToName": {
            "1": "entity_id",
            "2": "lp_type_id"
          },
          "rels": {
            "public.entity_lp_types.entity_id-public.entities.id": "M-1",
            "public.entity_lp_types.lp_type_id-public.lp_types.id": "M-1"
          },
          "rels_new": {
            "public.entity_lp_types.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_entity_id"
            },
            "public.entity_lp_types.lp_type_id-public.lp_types.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "lp_type"
            }
          }
        }
      },
      "entity_lp_details": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_lp_details",
          "columns": {
            "ftf": {
              "id": 2,
              "type": "boolean",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "entity_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            }
          },
          "id": 11728561,
          "primary": [
            "entity_id"
          ],
          "unique": [
            "entity_id",
            "entity_id"
          ],
          "relations": {
            "entity_id": "public.entities.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_lp_details_pkey": [
              "entity_id"
            ]
          },
          "notnulls": [
            "entity_id"
          ],
          "serials": [],
          "idToName": {
            "1": "entity_id",
            "2": "ftf"
          },
          "rels": {
            "public.entity_lp_details.entity_id-public.entities.id": "1-1"
          },
          "rels_new": {
            "public.entity_lp_details.entity_id-public.entities.id": {
              "type": "1-1",
              "direct": "out",
              "alias": "entity"
            }
          }
        }
      },
      "lp_types": {
        "properties": {
          "schema_name": "public",
          "table_name": "lp_types",
          "columns": {
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 11728551,
          "primary": [
            "id"
          ],
          "unique": [
            "name",
            "id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.entity_lp_types.lp_type_id"
            ]
          },
          "uindex": {
            "lp_types_name_key": [
              "name"
            ],
            "lp_types_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "name",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name"
          },
          "rels": {
            "public.lp_types.id-public.entity_lp_types.lp_type_id": "1-M"
          },
          "rels_new": {
            "public.lp_types.id-public.entity_lp_types.lp_type_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_lp_types"
            }
          }
        }
      },
      "fund_types": {
        "properties": {
          "schema_name": "public",
          "table_name": "fund_types",
          "columns": {
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 11728541,
          "primary": [
            "id"
          ],
          "unique": [
            "name",
            "id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.entity_lp_fund_type_pref.fund_type_id"
            ]
          },
          "uindex": {
            "fund_types_name_key": [
              "name"
            ],
            "fund_types_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "name",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name"
          },
          "rels": {
            "public.fund_types.id-public.entity_lp_fund_type_pref.fund_type_id": "1-M"
          },
          "rels_new": {
            "public.fund_types.id-public.entity_lp_fund_type_pref.fund_type_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_lp_fund_type_prefs"
            }
          }
        }
      },
      "company_industries": {
        "properties": {
          "schema_name": "public",
          "table_name": "company_industries",
          "columns": {
            "company_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": false
            },
            "primary_industry": {
              "id": 5,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "vertical": {
              "id": 4,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "industry_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.industries.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 11671958,
          "primary": [
            "id"
          ],
          "unique": [
            "company_id",
            "industry_id",
            "company_id",
            "company_id",
            "industry_id",
            "id",
            "industry_id"
          ],
          "relations": {
            "company_id": "public.entities.id",
            "industry_id": "public.industries.id"
          },
          "referencedBy": {},
          "uindex": {
            "company_industries_company_id_industry_id_key": [
              "company_id",
              "industry_id"
            ],
            "company_industries_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "company_id",
            "industry_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "company_id",
            "3": "industry_id",
            "4": "vertical",
            "5": "primary_industry"
          },
          "rels": {
            "public.company_industries.company_id-public.entities.id": "M-1",
            "public.company_industries.industry_id-public.industries.id": "M-1"
          },
          "rels_new": {
            "public.company_industries.company_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_company_id"
            },
            "public.company_industries.industry_id-public.industries.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "industry_by_industry_id"
            }
          }
        }
      },
      "keywords": {
        "properties": {
          "schema_name": "public",
          "table_name": "keywords",
          "columns": {
            "entity_count": {
              "id": 2,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "embedding": {
              "id": 3,
              "type": "vector(1536)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "investor_count": {
              "id": 4,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "keyword": {
              "id": 1,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 11671915,
          "primary": [],
          "unique": [
            "keyword"
          ],
          "relations": {},
          "referencedBy": {
            "keyword": [
              "public.portfolio_keywords.keyword",
              "public.entity_keywords.keyword"
            ]
          },
          "uindex": {
            "keywords_keyword_key": [
              "keyword"
            ]
          },
          "notnulls": [
            "keyword"
          ],
          "serials": [],
          "idToName": {
            "1": "keyword",
            "2": "entity_count",
            "3": "embedding",
            "4": "investor_count"
          },
          "rels": {
            "public.keywords.keyword-public.portfolio_keywords.keyword": "1-M",
            "public.keywords.keyword-public.entity_keywords.keyword": "1-M"
          },
          "rels_new": {
            "public.keywords.keyword-public.portfolio_keywords.keyword": {
              "type": "1-M",
              "direct": "in",
              "alias": "portfolio_keywords"
            },
            "public.keywords.keyword-public.entity_keywords.keyword": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_keywords"
            }
          }
        }
      },
      "entity_keywords": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_keywords",
          "columns": {
            "entity_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "keyword": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.keywords.keyword",
              "unique": true
            }
          },
          "id": 11671864,
          "primary": [],
          "unique": [
            "entity_id",
            "keyword",
            "entity_id",
            "keyword",
            "keyword",
            "entity_id"
          ],
          "relations": {
            "entity_id": "public.entities.id",
            "keyword": "public.keywords.keyword"
          },
          "referencedBy": {},
          "uindex": {
            "entity_keywords_entity_id_keyword_key": [
              "entity_id",
              "keyword"
            ]
          },
          "notnulls": [
            "entity_id",
            "keyword"
          ],
          "serials": [],
          "idToName": {
            "1": "entity_id",
            "2": "keyword"
          },
          "rels": {
            "public.entity_keywords.entity_id-public.entities.id": "M-1",
            "public.entity_keywords.keyword-public.keywords.keyword": "M-1"
          },
          "rels_new": {
            "public.entity_keywords.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_entity_id"
            },
            "public.entity_keywords.keyword-public.keywords.keyword": {
              "type": "M-1",
              "direct": "out",
              "alias": "keyword_by_keyword"
            }
          }
        }
      },
      "cb_mna_dump": {
        "properties": {
          "schema_name": "public",
          "table_name": "cb_mna_dump",
          "columns": {
            "mna_ob": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "cb_mna_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 11597985,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "cb_mna_id"
          ],
          "relations": {},
          "referencedBy": {},
          "uindex": {
            "cb_mna_dump_pkey": [
              "id"
            ],
            "cb_mna_dump_cb_mna_id_key": [
              "cb_mna_id"
            ]
          },
          "notnulls": [
            "id",
            "cb_mna_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "cb_mna_id",
            "3": "mna_ob",
            "4": "created_at"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "cb_deal_dump": {
        "properties": {
          "schema_name": "public",
          "table_name": "cb_deal_dump",
          "columns": {
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "deal_ob": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "cb_deal_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 11482634,
          "primary": [
            "id"
          ],
          "unique": [
            "cb_deal_id",
            "id"
          ],
          "relations": {},
          "referencedBy": {},
          "uindex": {
            "cb_deal_dump_cb_deal_id_key": [
              "cb_deal_id"
            ],
            "cb_deal_dump_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "cb_deal_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "cb_deal_id",
            "3": "deal_ob",
            "4": "created_at"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "cb_people_dump": {
        "properties": {
          "schema_name": "public",
          "table_name": "cb_people_dump",
          "columns": {
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "person_ob": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "cb_person_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 11389770,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "cb_person_id"
          ],
          "relations": {},
          "referencedBy": {},
          "uindex": {
            "cb_people_dump_pkey": [
              "id"
            ],
            "cb_people_dump_cb_person_id_key": [
              "cb_person_id"
            ]
          },
          "notnulls": [
            "id",
            "cb_person_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "cb_person_id",
            "3": "person_ob",
            "4": "created_at"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "cb_contacts_dump": {
        "properties": {
          "schema_name": "public",
          "table_name": "cb_contacts_dump",
          "columns": {
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "contact_ob": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "cb_contact_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 11389759,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "cb_contact_id"
          ],
          "relations": {},
          "referencedBy": {},
          "uindex": {
            "cb_contacts_dump_pkey": [
              "id"
            ],
            "cb_contacts_dump_cb_contact_id_key": [
              "cb_contact_id"
            ]
          },
          "notnulls": [
            "id",
            "cb_contact_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "cb_contact_id",
            "3": "contact_ob",
            "4": "created_at"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "cb_dump": {
        "properties": {
          "schema_name": "public",
          "table_name": "cb_dump",
          "columns": {
            "company_ob": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 5,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "cb_company_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "investor_ob": {
              "id": 4,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 9851325,
          "primary": [
            "id"
          ],
          "unique": [
            "cb_company_id",
            "id"
          ],
          "relations": {},
          "referencedBy": {},
          "uindex": {
            "cb_dump_cb_company_id_key": [
              "cb_company_id"
            ],
            "cb_dump_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "cb_company_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "cb_company_id",
            "3": "company_ob",
            "4": "investor_ob",
            "5": "created_at"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "llm_chat": {
        "properties": {
          "schema_name": "public",
          "table_name": "llm_chat",
          "columns": {
            "filter_history": {
              "id": 6,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_by": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at": {
              "id": 2,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "chat": {
              "id": 4,
              "type": "jsonb",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 9851251,
          "primary": [
            "id"
          ],
          "unique": [
            "id"
          ],
          "relations": {
            "created_by": "auth.su_app_id_to_user_id.user_id"
          },
          "referencedBy": {
            "id": [
              "public.llm_messages.chat_id",
              "public.llm_messages_bug.chat_id"
            ]
          },
          "uindex": {
            "llm_chat_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "created_by",
            "id",
            "created_at",
            "chat"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "created_at",
            "3": "created_by",
            "4": "chat",
            "5": "name",
            "6": "filter_history"
          },
          "rels": {
            "public.llm_chat.id-public.llm_messages.chat_id": "1-M",
            "public.llm_chat.id-public.llm_messages_bug.chat_id": "1-M",
            "public.llm_chat.created_by-auth.su_app_id_to_user_id.user_id": "M-1"
          },
          "rels_new": {
            "public.llm_chat.id-public.llm_messages.chat_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "llm_messages"
            },
            "public.llm_chat.id-public.llm_messages_bug.chat_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "llm_messages_bugs"
            },
            "public.llm_chat.created_by-auth.su_app_id_to_user_id.user_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id"
            }
          }
        }
      },
      "entity_company_details": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_company_details",
          "columns": {
            "vc_raised": {
              "id": 6,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "net_debt": {
              "id": 4,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "ebitda": {
              "id": 3,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "ebit": {
              "id": 2,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "entity_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": false
            },
            "valuation_date": {
              "id": 21,
              "type": "date",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "valuation": {
              "id": 20,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "company_details": {
              "id": 19,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "first_financing_size": {
              "id": 18,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "first_financing_debt": {
              "id": 17,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "first_financing_date": {
              "id": 16,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_financing_size": {
              "id": 15,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_financing_debt": {
              "id": 14,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_financing_date": {
              "id": 13,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "financing_status": {
              "id": 12,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "enterprise_value": {
              "id": 11,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "business_status": {
              "id": 10,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "fiscal_period": {
              "id": 9,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "gross_profit": {
              "id": 8,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "net_income": {
              "id": 7,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "revenue": {
              "id": 5,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 9851137,
          "primary": [
            "entity_id"
          ],
          "unique": [
            "entity_id",
            "entity_id"
          ],
          "relations": {
            "entity_id": "public.entities.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_company_details_pkey": [
              "entity_id"
            ]
          },
          "notnulls": [
            "entity_id"
          ],
          "serials": [],
          "idToName": {
            "1": "entity_id",
            "2": "ebit",
            "3": "ebitda",
            "4": "net_debt",
            "5": "revenue",
            "6": "vc_raised",
            "7": "net_income",
            "8": "gross_profit",
            "9": "fiscal_period",
            "10": "business_status",
            "11": "enterprise_value",
            "12": "financing_status",
            "13": "last_financing_date",
            "14": "last_financing_debt",
            "15": "last_financing_size",
            "16": "first_financing_date",
            "17": "first_financing_debt",
            "18": "first_financing_size",
            "19": "company_details",
            "20": "valuation",
            "21": "valuation_date"
          },
          "rels": {
            "public.entity_company_details.entity_id-public.entities.id": "M-1"
          },
          "rels_new": {
            "public.entity_company_details.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_entity_id"
            }
          }
        }
      },
      "user_preferences": {
        "properties": {
          "schema_name": "public",
          "table_name": "user_preferences",
          "columns": {
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "user_id": {
              "id": 2,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": true
            },
            "preference": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 9197459,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "user_id",
            "user_id"
          ],
          "relations": {
            "user_id": "auth.su_app_id_to_user_id.user_id"
          },
          "referencedBy": {},
          "uindex": {
            "user_preferences_pkey": [
              "id"
            ],
            "user_preferences_user_id_key": [
              "user_id"
            ]
          },
          "notnulls": [
            "id",
            "user_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "user_id",
            "3": "preference"
          },
          "rels": {
            "public.user_preferences.user_id-auth.su_app_id_to_user_id.user_id": "1-1"
          },
          "rels_new": {
            "public.user_preferences.user_id-auth.su_app_id_to_user_id.user_id": {
              "type": "1-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id"
            }
          }
        }
      },
      "saved_searches": {
        "properties": {
          "schema_name": "public",
          "table_name": "saved_searches",
          "columns": {
            "created_at": {
              "id": 2,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_by": {
              "id": 4,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.user_id",
              "unique": false
            },
            "is_people": {
              "id": 8,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "notes": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "filters": {
              "id": 6,
              "type": "jsonb",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "search_type": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 9008998,
          "primary": [
            "id"
          ],
          "unique": [
            "id"
          ],
          "relations": {
            "created_by": "auth.su_app_id_to_user_id.user_id"
          },
          "referencedBy": {},
          "uindex": {
            "saved_searches_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "created_at",
            "id",
            "created_by",
            "filters",
            "name",
            "search_type"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "created_at",
            "3": "search_type",
            "4": "created_by",
            "5": "name",
            "6": "filters",
            "7": "notes",
            "8": "is_people"
          },
          "rels": {
            "public.saved_searches.created_by-auth.su_app_id_to_user_id.user_id": "M-1"
          },
          "rels_new": {
            "public.saved_searches.created_by-auth.su_app_id_to_user_id.user_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id"
            }
          }
        }
      },
      "entity_industry_pref": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_industry_pref",
          "columns": {
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "industry_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.industries.id",
              "unique": true
            }
          },
          "id": 7880626,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "entity_id",
            "entity_id",
            "industry_id",
            "industry_id",
            "industry_id",
            "entity_id"
          ],
          "relations": {
            "entity_id": "public.entities.id",
            "industry_id": "public.industries.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_industry_pref_pkey": [
              "id"
            ],
            "entity_industry_new_u_index": [
              "entity_id",
              "industry_id"
            ]
          },
          "notnulls": [
            "id",
            "entity_id",
            "industry_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "entity_id",
            "3": "industry_id"
          },
          "rels": {
            "public.entity_industry_pref.entity_id-public.entities.id": "M-1",
            "public.entity_industry_pref.industry_id-public.industries.id": "M-1"
          },
          "rels_new": {
            "public.entity_industry_pref.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_entity_id"
            },
            "public.entity_industry_pref.industry_id-public.industries.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "industry_by_industry_id"
            }
          }
        }
      },
      "entity_continent_pref": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_continent_pref",
          "columns": {
            "geo_continent_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_super_regions.id",
              "unique": true
            },
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 7541482,
          "primary": [
            "id"
          ],
          "unique": [
            "geo_continent_id",
            "entity_id",
            "geo_continent_id",
            "entity_id",
            "id"
          ],
          "relations": {
            "entity_id": "public.entities.id",
            "geo_continent_id": "public.geo_super_regions.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_continent_pref_entity_id_geo_continent_id_key": [
              "geo_continent_id",
              "entity_id"
            ],
            "entity_continent_pref_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "entity_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "entity_id",
            "3": "geo_continent_id"
          },
          "rels": {
            "public.entity_continent_pref.entity_id-public.entities.id": "M-1",
            "public.entity_continent_pref.geo_continent_id-public.geo_super_regions.id": "M-1"
          },
          "rels_new": {
            "public.entity_continent_pref.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity"
            },
            "public.entity_continent_pref.geo_continent_id-public.geo_super_regions.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_super_region"
            }
          }
        }
      },
      "entity_country_pref": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_country_pref",
          "columns": {
            "geo_country_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_countries.id",
              "unique": true
            },
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 7541462,
          "primary": [
            "id"
          ],
          "unique": [
            "geo_country_id",
            "entity_id",
            "geo_country_id",
            "geo_country_id",
            "entity_id",
            "entity_id",
            "id"
          ],
          "relations": {
            "entity_id": "public.entities.id",
            "geo_country_id": "public.geo_countries.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_country_pref_entity_id_geo_country_id_key": [
              "geo_country_id",
              "entity_id"
            ],
            "entity_country_pref_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "entity_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "entity_id",
            "3": "geo_country_id"
          },
          "rels": {
            "public.entity_country_pref.entity_id-public.entities.id": "M-1",
            "public.entity_country_pref.geo_country_id-public.geo_countries.id": "M-1"
          },
          "rels_new": {
            "public.entity_country_pref.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_entity_id"
            },
            "public.entity_country_pref.geo_country_id-public.geo_countries.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_country_by_geo_country_id"
            }
          }
        }
      },
      "entity_state_group_pref": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_state_group_pref",
          "columns": {
            "geo_state_group_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_state_groups.id",
              "unique": true
            },
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 7541412,
          "primary": [
            "id"
          ],
          "unique": [
            "geo_state_group_id",
            "entity_id",
            "entity_id",
            "geo_state_group_id",
            "id"
          ],
          "relations": {
            "entity_id": "public.entities.id",
            "geo_state_group_id": "public.geo_state_groups.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_state_group_pref_entity_id_geo_state_group_id_key": [
              "geo_state_group_id",
              "entity_id"
            ],
            "entity_state_group_pref_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "entity_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "entity_id",
            "3": "geo_state_group_id"
          },
          "rels": {
            "public.entity_state_group_pref.entity_id-public.entities.id": "M-1",
            "public.entity_state_group_pref.geo_state_group_id-public.geo_state_groups.id": "M-1"
          },
          "rels_new": {
            "public.entity_state_group_pref.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity"
            },
            "public.entity_state_group_pref.geo_state_group_id-public.geo_state_groups.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_state_group"
            }
          }
        }
      },
      "geo_state_group_states": {
        "properties": {
          "schema_name": "public",
          "table_name": "geo_state_group_states",
          "columns": {
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "geo_state_group_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_state_groups.id",
              "unique": true
            },
            "geo_state_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_states.id",
              "unique": true
            }
          },
          "id": 7541392,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "geo_state_group_id",
            "geo_state_group_id",
            "geo_state_id",
            "geo_state_id"
          ],
          "relations": {
            "geo_state_group_id": "public.geo_state_groups.id",
            "geo_state_id": "public.geo_states.id"
          },
          "referencedBy": {},
          "uindex": {
            "geo_state_group_states_pkey": [
              "id"
            ],
            "geo_state_group_states_geo_state_group_id_geo_state_id_key": [
              "geo_state_group_id",
              "geo_state_id"
            ]
          },
          "notnulls": [
            "id",
            "geo_state_group_id",
            "geo_state_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "geo_state_group_id",
            "3": "geo_state_id"
          },
          "rels": {
            "public.geo_state_group_states.geo_state_group_id-public.geo_state_groups.id": "M-1",
            "public.geo_state_group_states.geo_state_id-public.geo_states.id": "M-1"
          },
          "rels_new": {
            "public.geo_state_group_states.geo_state_group_id-public.geo_state_groups.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_state_group"
            },
            "public.geo_state_group_states.geo_state_id-public.geo_states.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_state"
            }
          }
        }
      },
      "geo_state_groups": {
        "properties": {
          "schema_name": "public",
          "table_name": "geo_state_groups",
          "columns": {
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 7541381,
          "primary": [
            "id"
          ],
          "unique": [
            "name",
            "id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.entity_state_group_pref.geo_state_group_id",
              "public.geo_state_group_states.geo_state_group_id"
            ]
          },
          "uindex": {
            "geo_state_groups_name_key": [
              "name"
            ],
            "geo_state_groups_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "name",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "created_at"
          },
          "rels": {
            "public.geo_state_groups.id-public.entity_state_group_pref.geo_state_group_id": "1-M",
            "public.geo_state_groups.id-public.geo_state_group_states.geo_state_group_id": "1-M"
          },
          "rels_new": {
            "public.geo_state_groups.id-public.entity_state_group_pref.geo_state_group_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_state_group_prefs"
            },
            "public.geo_state_groups.id-public.geo_state_group_states.geo_state_group_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "geo_state_group_states"
            }
          }
        }
      },
      "entity_state_pref": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_state_pref",
          "columns": {
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "geo_state_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_states.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 7541361,
          "primary": [
            "id"
          ],
          "unique": [
            "entity_id",
            "entity_id",
            "geo_state_id",
            "id",
            "geo_state_id"
          ],
          "relations": {
            "entity_id": "public.entities.id",
            "geo_state_id": "public.geo_states.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_state_pref_entity_id_geo_state_id_key": [
              "entity_id",
              "geo_state_id"
            ],
            "entity_state_pref_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "entity_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "entity_id",
            "3": "geo_state_id"
          },
          "rels": {
            "public.entity_state_pref.entity_id-public.entities.id": "M-1",
            "public.entity_state_pref.geo_state_id-public.geo_states.id": "M-1"
          },
          "rels_new": {
            "public.entity_state_pref.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity"
            },
            "public.entity_state_pref.geo_state_id-public.geo_states.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_state"
            }
          }
        }
      },
      "entity_pb_other_pref": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_pb_other_pref",
          "columns": {
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "pb_other_pref_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.pb_other_preferences.id",
              "unique": true
            }
          },
          "id": 7541337,
          "primary": [
            "id"
          ],
          "unique": [
            "entity_id",
            "id",
            "pb_other_pref_id",
            "pb_other_pref_id",
            "entity_id"
          ],
          "relations": {
            "pb_other_pref_id": "public.pb_other_preferences.id",
            "entity_id": "public.entities.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_pb_other_pref_entity_id_pb_other_pref_id_key": [
              "entity_id",
              "pb_other_pref_id"
            ],
            "entity_pb_other_pref_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "entity_id",
            "id",
            "pb_other_pref_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "entity_id",
            "3": "pb_other_pref_id"
          },
          "rels": {
            "public.entity_pb_other_pref.pb_other_pref_id-public.pb_other_preferences.id": "M-1",
            "public.entity_pb_other_pref.entity_id-public.entities.id": "M-1"
          },
          "rels_new": {
            "public.entity_pb_other_pref.pb_other_pref_id-public.pb_other_preferences.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "pb_other_preference"
            },
            "public.entity_pb_other_pref.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity"
            }
          }
        }
      },
      "pb_other_preferences": {
        "properties": {
          "schema_name": "public",
          "table_name": "pb_other_preferences",
          "columns": {
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 7541326,
          "primary": [
            "id"
          ],
          "unique": [
            "name",
            "id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.entity_pb_other_pref.pb_other_pref_id"
            ]
          },
          "uindex": {
            "pb_other_preferences_name_key": [
              "name"
            ],
            "pb_other_preferences_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "name",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "created_at"
          },
          "rels": {
            "public.pb_other_preferences.id-public.entity_pb_other_pref.pb_other_pref_id": "1-M"
          },
          "rels_new": {
            "public.pb_other_preferences.id-public.entity_pb_other_pref.pb_other_pref_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_pb_other_prefs"
            }
          }
        }
      },
      "entity_stage_pref": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_stage_pref",
          "columns": {
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "stage_type_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.stage_types.id",
              "unique": true
            }
          },
          "id": 7541306,
          "primary": [
            "id"
          ],
          "unique": [
            "entity_id",
            "id",
            "stage_type_id",
            "entity_id",
            "stage_type_id",
            "entity_id",
            "stage_type_id"
          ],
          "relations": {
            "entity_id": "public.entities.id",
            "stage_type_id": "public.stage_types.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_stage_pref_entity_id_stage_type_id_key": [
              "entity_id",
              "stage_type_id"
            ],
            "entity_stage_pref_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "entity_id",
            "id",
            "stage_type_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "entity_id",
            "3": "stage_type_id"
          },
          "rels": {
            "public.entity_stage_pref.entity_id-public.entities.id": "M-1",
            "public.entity_stage_pref.stage_type_id-public.stage_types.id": "M-1"
          },
          "rels_new": {
            "public.entity_stage_pref.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_entity_id"
            },
            "public.entity_stage_pref.stage_type_id-public.stage_types.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "stage_type_by_stage_type_id"
            }
          }
        }
      },
      "entity_pb_indus_pref": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_pb_indus_pref",
          "columns": {
            "pb_indus_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.pb_indus.id",
              "unique": true
            },
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 7541285,
          "primary": [
            "id"
          ],
          "unique": [
            "pb_indus_id",
            "entity_id",
            "entity_id",
            "pb_indus_id",
            "id"
          ],
          "relations": {
            "pb_indus_id": "public.pb_indus.id",
            "entity_id": "public.entities.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_pb_indus_pref_entity_id_pb_indus_id_key": [
              "pb_indus_id",
              "entity_id"
            ],
            "entity_pb_indus_pref_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "pb_indus_id",
            "entity_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "entity_id",
            "3": "pb_indus_id"
          },
          "rels": {
            "public.entity_pb_indus_pref.pb_indus_id-public.pb_indus.id": "M-1",
            "public.entity_pb_indus_pref.entity_id-public.entities.id": "M-1"
          },
          "rels_new": {
            "public.entity_pb_indus_pref.pb_indus_id-public.pb_indus.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "pb_indus"
            },
            "public.entity_pb_indus_pref.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity"
            }
          }
        }
      },
      "industries": {
        "properties": {
          "schema_name": "public",
          "table_name": "industries",
          "columns": {
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "category2": {
              "id": 5,
              "type": "citext",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "category1": {
              "id": 4,
              "type": "citext",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 7541184,
          "primary": [
            "id"
          ],
          "unique": [
            "name",
            "id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.portfolio_industries.industry_id",
              "public.company_industries.industry_id",
              "public.entity_industry_pref.industry_id",
              "public.pb_indus.new_sector_id"
            ]
          },
          "uindex": {
            "industries_name_key": [
              "name"
            ],
            "industries_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "name",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "created_at",
            "4": "category1",
            "5": "category2"
          },
          "rels": {
            "public.industries.id-public.portfolio_industries.industry_id": "1-M",
            "public.industries.id-public.company_industries.industry_id": "1-M",
            "public.industries.id-public.entity_industry_pref.industry_id": "1-M",
            "public.industries.id-public.pb_indus.new_sector_id": "1-M"
          },
          "rels_new": {
            "public.industries.id-public.portfolio_industries.industry_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "portfolio_industries"
            },
            "public.industries.id-public.company_industries.industry_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "company_industries"
            },
            "public.industries.id-public.entity_industry_pref.industry_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_industry_prefs"
            },
            "public.industries.id-public.pb_indus.new_sector_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "pb_induses"
            }
          }
        }
      },
      "stage_types": {
        "properties": {
          "schema_name": "public",
          "table_name": "stage_types",
          "columns": {
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 7541172,
          "primary": [
            "id"
          ],
          "unique": [
            "name",
            "id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.entity_stage_pref.stage_type_id"
            ]
          },
          "uindex": {
            "stage_types_name_key": [
              "name"
            ],
            "stage_types_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "name",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "created_at"
          },
          "rels": {
            "public.stage_types.id-public.entity_stage_pref.stage_type_id": "1-M"
          },
          "rels_new": {
            "public.stage_types.id-public.entity_stage_pref.stage_type_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_stage_prefs"
            }
          }
        }
      },
      "entity_investment_preferences": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_investment_preferences",
          "columns": {
            "entity_id": {
              "id": 1,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": false
            },
            "ebit": {
              "id": 3,
              "type": "int8range",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "dry_powder": {
              "id": 11,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "aum": {
              "id": 12,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_inv_date": {
              "id": 13,
              "type": "date",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "investment_amount": {
              "id": 4,
              "type": "int8range",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "geo_prefs_not_found": {
              "id": 10,
              "type": "text[]",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "investment_type": {
              "id": 9,
              "type": "text[]",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "range_ambiguous": {
              "id": 8,
              "type": "boolean",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "company_valuation": {
              "id": 6,
              "type": "int8range",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "deal_size": {
              "id": 5,
              "type": "int8range",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "revenue": {
              "id": 7,
              "type": "int8range",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "ebitda": {
              "id": 2,
              "type": "int8range",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 7541113,
          "primary": [
            "entity_id"
          ],
          "unique": [
            "entity_id",
            "entity_id"
          ],
          "relations": {
            "entity_id": "public.entities.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_investment_preferences_pkey": [
              "entity_id"
            ]
          },
          "notnulls": [
            "entity_id"
          ],
          "serials": [],
          "idToName": {
            "1": "entity_id",
            "2": "ebitda",
            "3": "ebit",
            "4": "investment_amount",
            "5": "deal_size",
            "6": "company_valuation",
            "7": "revenue",
            "8": "range_ambiguous",
            "9": "investment_type",
            "10": "geo_prefs_not_found",
            "11": "dry_powder",
            "12": "aum",
            "13": "last_inv_date"
          },
          "rels": {
            "public.entity_investment_preferences.entity_id-public.entities.id": "1-1"
          },
          "rels_new": {
            "public.entity_investment_preferences.entity_id-public.entities.id": {
              "type": "1-1",
              "direct": "out",
              "alias": "entity_by_entity_id"
            }
          }
        }
      },
      "emails": {
        "properties": {
          "schema_name": "public",
          "table_name": "emails",
          "columns": {
            "email": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "person_role_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.people_roles.id",
              "unique": false
            },
            "source": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.data_source.id",
              "unique": false
            },
            "domain": {
              "id": 6,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.domains.name",
              "unique": false
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 7271193,
          "primary": [
            "id"
          ],
          "unique": [
            "email",
            "id"
          ],
          "relations": {
            "person_role_id": "public.people_roles.id",
            "source": "public.data_source.id",
            "domain": "public.domains.name"
          },
          "referencedBy": {},
          "uindex": {
            "emails_email_key": [
              "email"
            ],
            "emails_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "email",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "email",
            "3": "person_role_id",
            "4": "created_at",
            "5": "source",
            "6": "domain"
          },
          "rels": {
            "public.emails.person_role_id-public.people_roles.id": "M-1",
            "public.emails.source-public.data_source.id": "M-1",
            "public.emails.domain-public.domains.name": "M-1"
          },
          "rels_new": {
            "public.emails.person_role_id-public.people_roles.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "people_role"
            },
            "public.emails.source-public.data_source.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "data_source"
            },
            "public.emails.domain-public.domains.name": {
              "type": "M-1",
              "direct": "out",
              "alias": "domain"
            }
          }
        }
      },
      "pb_vert": {
        "properties": {
          "schema_name": "public",
          "table_name": "pb_vert",
          "columns": {
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "replace_sectors": {
              "id": 4,
              "type": "text[]",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 5699453,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "name"
          ],
          "relations": {},
          "referencedBy": {},
          "uindex": {
            "pb_vert_pkey": [
              "id"
            ],
            "pb_vert_name_key": [
              "name"
            ]
          },
          "notnulls": [
            "id",
            "name"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "created_at",
            "4": "replace_sectors"
          },
          "rels": {},
          "rels_new": {}
        }
      },
      "pb_indus": {
        "properties": {
          "schema_name": "public",
          "table_name": "pb_indus",
          "columns": {
            "replace_sectors": {
              "id": 4,
              "type": "text[]",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "category1": {
              "id": 6,
              "type": "citext",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "new_sector_id": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.industries.id",
              "unique": false
            },
            "category2": {
              "id": 7,
              "type": "citext",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "pb_id": {
              "id": 8,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 5699439,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "pb_id"
          ],
          "relations": {
            "new_sector_id": "public.industries.id"
          },
          "referencedBy": {
            "id": [
              "public.entity_pb_indus_pref.pb_indus_id"
            ]
          },
          "uindex": {
            "pb_indus_pkey": [
              "id"
            ],
            "pb_indus_pb_id_key": [
              "pb_id"
            ]
          },
          "notnulls": [
            "id",
            "name"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "created_at",
            "4": "replace_sectors",
            "5": "new_sector_id",
            "6": "category1",
            "7": "category2",
            "8": "pb_id"
          },
          "rels": {
            "public.pb_indus.id-public.entity_pb_indus_pref.pb_indus_id": "1-M",
            "public.pb_indus.new_sector_id-public.industries.id": "M-1"
          },
          "rels_new": {
            "public.pb_indus.id-public.entity_pb_indus_pref.pb_indus_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_pb_indus_prefs"
            },
            "public.pb_indus.new_sector_id-public.industries.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "industry"
            }
          }
        }
      },
      "enrichment_data": {
        "properties": {
          "schema_name": "public",
          "table_name": "enrichment_data",
          "columns": {
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "website_to_logo": {
              "id": 4,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "logo_enrich_error": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "embedding": {
              "id": 6,
              "type": "vector(2048)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "embedding_extra": {
              "id": 7,
              "type": "vector(3072)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 1276851,
          "primary": [
            "id"
          ],
          "unique": [
            "entity_id",
            "id",
            "entity_id"
          ],
          "relations": {
            "entity_id": "public.entities.id"
          },
          "referencedBy": {},
          "uindex": {
            "enrichment_data_entity_id_key": [
              "entity_id"
            ],
            "enrichment_data_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "entity_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "entity_id",
            "3": "created_at",
            "4": "website_to_logo",
            "5": "logo_enrich_error",
            "6": "embedding",
            "7": "embedding_extra"
          },
          "rels": {
            "public.enrichment_data.entity_id-public.entities.id": "1-1"
          },
          "rels_new": {
            "public.enrichment_data.entity_id-public.entities.id": {
              "type": "1-1",
              "direct": "out",
              "alias": "entity"
            }
          }
        }
      },
      "deal_investors": {
        "properties": {
          "schema_name": "public",
          "table_name": "deal_investors",
          "columns": {
            "deal_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.deals.id",
              "unique": true
            },
            "investor_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": false
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 1276830,
          "primary": [
            "id"
          ],
          "unique": [
            "deal_id",
            "investor_id",
            "investor_id",
            "deal_id",
            "id",
            "investor_id",
            "deal_id"
          ],
          "relations": {
            "deal_id": "public.deals.id",
            "investor_id": "public.entities.id"
          },
          "referencedBy": {},
          "uindex": {
            "deal_investors_deal_id_investor_id_key": [
              "deal_id",
              "investor_id"
            ],
            "deal_investors_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "deal_id",
            "investor_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "deal_id",
            "3": "investor_id",
            "4": "created_at"
          },
          "rels": {
            "public.deal_investors.deal_id-public.deals.id": "M-1",
            "public.deal_investors.investor_id-public.entities.id": "M-1"
          },
          "rels_new": {
            "public.deal_investors.deal_id-public.deals.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "deal_by_deal_id"
            },
            "public.deal_investors.investor_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_investor_id"
            }
          }
        }
      },
      "deals": {
        "properties": {
          "schema_name": "public",
          "table_name": "deals",
          "columns": {
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "dump_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.pb_deal_dump.id",
              "unique": true
            },
            "pb_deal_size": {
              "id": 11,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "pb_type3": {
              "id": 9,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "pb_type2": {
              "id": 8,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "pb_investor_count": {
              "id": 6,
              "type": "smallint",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 5,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "deal_type": {
              "id": 4,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "deal_date": {
              "id": 12,
              "type": "date",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "pb_type": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "pb_status": {
              "id": 10,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "amount": {
              "id": 13,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "sell_side_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": false
            }
          },
          "id": 1276809,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "dump_id",
            "dump_id"
          ],
          "relations": {
            "dump_id": "public.pb_deal_dump.id",
            "sell_side_id": "public.entities.id"
          },
          "referencedBy": {
            "id": [
              "public.deal_investors.deal_id"
            ]
          },
          "uindex": {
            "deals_pkey": [
              "id"
            ],
            "deals_dump_id_key": [
              "dump_id"
            ]
          },
          "notnulls": [
            "id",
            "dump_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "dump_id",
            "3": "sell_side_id",
            "4": "deal_type",
            "5": "created_at",
            "6": "pb_investor_count",
            "7": "pb_type",
            "8": "pb_type2",
            "9": "pb_type3",
            "10": "pb_status",
            "11": "pb_deal_size",
            "12": "deal_date",
            "13": "amount"
          },
          "rels": {
            "public.deals.id-public.deal_investors.deal_id": "1-M",
            "public.deals.dump_id-public.pb_deal_dump.id": "1-1",
            "public.deals.sell_side_id-public.entities.id": "M-1"
          },
          "rels_new": {
            "public.deals.id-public.deal_investors.deal_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "deal_investors"
            },
            "public.deals.dump_id-public.pb_deal_dump.id": {
              "type": "1-1",
              "direct": "out",
              "alias": "pb_deal_dump"
            },
            "public.deals.sell_side_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity"
            }
          }
        }
      },
      "people_roles": {
        "properties": {
          "schema_name": "public",
          "table_name": "people_roles",
          "columns": {
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "email": {
              "id": 8,
              "type": "citext",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "person_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.people.id",
              "unique": true
            },
            "entity_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "role": {
              "id": 4,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 7,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "current": {
              "id": 5,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "source": {
              "id": 9,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.data_source.id",
              "unique": false
            }
          },
          "id": 949265,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "email",
            "person_id",
            "entity_id",
            "person_id",
            "entity_id",
            "person_id",
            "entity_id"
          ],
          "relations": {
            "person_id": "public.people.id",
            "entity_id": "public.entities.id",
            "source": "public.data_source.id"
          },
          "referencedBy": {
            "id": [
              "public.people_role_designations.people_role_id",
              "public.emails.person_role_id"
            ]
          },
          "uindex": {
            "people_roles_pkey": [
              "id"
            ],
            "people_roles_email_key": [
              "email"
            ],
            "people_roles_person_id_entity_id_key": [
              "person_id",
              "entity_id"
            ]
          },
          "notnulls": [
            "id",
            "person_id",
            "entity_id",
            "role"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "person_id",
            "3": "entity_id",
            "4": "role",
            "5": "current",
            "7": "created_at",
            "8": "email",
            "9": "source"
          },
          "rels": {
            "public.people_roles.id-public.people_role_designations.people_role_id": "1-M",
            "public.people_roles.id-public.emails.person_role_id": "1-M",
            "public.people_roles.person_id-public.people.id": "M-1",
            "public.people_roles.entity_id-public.entities.id": "M-1",
            "public.people_roles.source-public.data_source.id": "M-1"
          },
          "rels_new": {
            "public.people_roles.id-public.people_role_designations.people_role_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "people_role_designations"
            },
            "public.people_roles.id-public.emails.person_role_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "emails"
            },
            "public.people_roles.person_id-public.people.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "person_by_person_id"
            },
            "public.people_roles.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_by_entity_id"
            },
            "public.people_roles.source-public.data_source.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "data_source"
            }
          }
        }
      },
      "people_educational_institutions": {
        "properties": {
          "schema_name": "public",
          "table_name": "people_educational_institutions",
          "columns": {
            "educational_institution_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.educational_institutions.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "person_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.people.id",
              "unique": true
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 949243,
          "primary": [
            "id"
          ],
          "unique": [
            "educational_institution_id",
            "educational_institution_id",
            "id",
            "person_id",
            "person_id"
          ],
          "relations": {
            "educational_institution_id": "public.educational_institutions.id",
            "person_id": "public.people.id"
          },
          "referencedBy": {},
          "uindex": {
            "people_educational_institutio_person_id_educational_institu_key": [
              "educational_institution_id",
              "person_id"
            ],
            "people_educational_institutions_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "educational_institution_id",
            "id",
            "person_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "person_id",
            "3": "educational_institution_id",
            "4": "created_at"
          },
          "rels": {
            "public.people_educational_institutions.educational_institution_id-public.educational_institutions.id": "M-1",
            "public.people_educational_institutions.person_id-public.people.id": "M-1"
          },
          "rels_new": {
            "public.people_educational_institutions.educational_institution_id-public.educational_institutions.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "educational_institution"
            },
            "public.people_educational_institutions.person_id-public.people.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "person"
            }
          }
        }
      },
      "people": {
        "properties": {
          "schema_name": "public",
          "table_name": "people",
          "columns": {
            "full_name": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "source": {
              "id": 14,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.data_source.id",
              "unique": false
            },
            "resolvers": {
              "id": 13,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 12,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "role_count": {
              "id": 11,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "biography": {
              "id": 10,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "linkedin_url": {
              "id": 8,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "primary_email": {
              "id": 9,
              "type": "citext",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "gender": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_name": {
              "id": 6,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "middle_name": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "first_name": {
              "id": 4,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "dump_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.pb_person_dump.id",
              "unique": true
            }
          },
          "id": 949225,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "primary_email",
            "dump_id",
            "dump_id"
          ],
          "relations": {
            "source": "public.data_source.id",
            "dump_id": "public.pb_person_dump.id"
          },
          "referencedBy": {
            "id": [
              "public.unlocked_contacts.person_id",
              "public.me_contacts.people_id",
              "public.list_people_ids.people_id",
              "public.people_roles.person_id",
              "public.people_educational_institutions.person_id"
            ]
          },
          "uindex": {
            "people_pkey": [
              "id"
            ],
            "people_primary_email_key": [
              "primary_email"
            ],
            "people_dump_id_key": [
              "dump_id"
            ]
          },
          "notnulls": [
            "full_name",
            "id",
            "dump_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "dump_id",
            "3": "full_name",
            "4": "first_name",
            "5": "middle_name",
            "6": "last_name",
            "7": "gender",
            "8": "linkedin_url",
            "9": "primary_email",
            "10": "biography",
            "11": "role_count",
            "12": "created_at",
            "13": "resolvers",
            "14": "source"
          },
          "rels": {
            "public.people.id-public.unlocked_contacts.person_id": "1-M",
            "public.people.id-public.me_contacts.people_id": "1-M",
            "public.people.id-public.list_people_ids.people_id": "1-M",
            "public.people.id-public.people_roles.person_id": "1-M",
            "public.people.id-public.people_educational_institutions.person_id": "1-M",
            "public.people.source-public.data_source.id": "M-1",
            "public.people.dump_id-public.pb_person_dump.id": "1-1"
          },
          "rels_new": {
            "public.people.id-public.unlocked_contacts.person_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "unlocked_contacts"
            },
            "public.people.id-public.me_contacts.people_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "me_contacts"
            },
            "public.people.id-public.list_people_ids.people_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "list_people_ids"
            },
            "public.people.id-public.people_roles.person_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "people_roles"
            },
            "public.people.id-public.people_educational_institutions.person_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "people_educational_institutions"
            },
            "public.people.source-public.data_source.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "data_source"
            },
            "public.people.dump_id-public.pb_person_dump.id": {
              "type": "1-1",
              "direct": "out",
              "alias": "pb_person_dump"
            }
          }
        }
      },
      "educational_institutions": {
        "properties": {
          "schema_name": "public",
          "table_name": "educational_institutions",
          "columns": {
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 949214,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "name"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.people_educational_institutions.educational_institution_id"
            ]
          },
          "uindex": {
            "educational_institutions_pkey": [
              "id"
            ],
            "educational_institutions_name_key": [
              "name"
            ]
          },
          "notnulls": [
            "id",
            "name"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "created_at"
          },
          "rels": {
            "public.educational_institutions.id-public.people_educational_institutions.educational_institution_id": "1-M"
          },
          "rels_new": {
            "public.educational_institutions.id-public.people_educational_institutions.educational_institution_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "people_educational_institutions"
            }
          }
        }
      },
      "pb_person_dump": {
        "properties": {
          "schema_name": "public",
          "table_name": "pb_person_dump",
          "columns": {
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "person_ob": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "resolvers": {
              "id": 5,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "pb_person_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 591071,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "pb_person_id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.people.dump_id"
            ]
          },
          "uindex": {
            "pb_person_dump_pkey": [
              "id"
            ],
            "pb_person_dump_pb_person_id_key": [
              "pb_person_id"
            ]
          },
          "notnulls": [
            "id",
            "pb_person_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "pb_person_id",
            "3": "person_ob",
            "4": "created_at",
            "5": "resolvers"
          },
          "rels": {
            "public.pb_person_dump.id-public.people.dump_id": "1-1"
          },
          "rels_new": {
            "public.pb_person_dump.id-public.people.dump_id": {
              "type": "1-1",
              "direct": "in",
              "alias": "person"
            }
          }
        }
      },
      "pb_deal_dump": {
        "properties": {
          "schema_name": "public",
          "table_name": "pb_deal_dump",
          "columns": {
            "pb_deal_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "resolvers": {
              "id": 5,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "deal_ob": {
              "id": 3,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 471234,
          "primary": [
            "id"
          ],
          "unique": [
            "pb_deal_id",
            "id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.deals.dump_id"
            ]
          },
          "uindex": {
            "pb_deal_dump_pb_deal_id_key": [
              "pb_deal_id"
            ],
            "pb_deal_dump_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "pb_deal_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "pb_deal_id",
            "3": "deal_ob",
            "4": "created_at",
            "5": "resolvers"
          },
          "rels": {
            "public.pb_deal_dump.id-public.deals.dump_id": "1-1"
          },
          "rels_new": {
            "public.pb_deal_dump.id-public.deals.dump_id": {
              "type": "1-1",
              "direct": "in",
              "alias": "deal"
            }
          }
        }
      },
      "entity_types_relations_other": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_types_relations_other",
          "columns": {
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "entity_type_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entity_types.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at": {
              "id": 4,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 358808,
          "primary": [
            "id"
          ],
          "unique": [
            "entity_id",
            "entity_type_id",
            "id",
            "entity_type_id",
            "entity_id"
          ],
          "relations": {
            "entity_type_id": "public.entity_types.id",
            "entity_id": "public.entities.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_types_relations_other_entity_id_entity_type_id_key": [
              "entity_id",
              "entity_type_id"
            ],
            "entity_types_relations_other_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "entity_id",
            "entity_type_id",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "entity_id",
            "3": "entity_type_id",
            "4": "created_at"
          },
          "rels": {
            "public.entity_types_relations_other.entity_type_id-public.entity_types.id": "M-1",
            "public.entity_types_relations_other.entity_id-public.entities.id": "M-1"
          },
          "rels_new": {
            "public.entity_types_relations_other.entity_type_id-public.entity_types.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_type"
            },
            "public.entity_types_relations_other.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity"
            }
          }
        }
      },
      "entity_addresses_other": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_addresses_other",
          "columns": {
            "is_hq": {
              "id": 4,
              "type": "boolean",
              "default": "false",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "entity_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entities.id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "address_id": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.addresses.id",
              "unique": true
            },
            "created_at": {
              "id": 5,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 358778,
          "primary": [
            "id"
          ],
          "unique": [
            "entity_id",
            "id",
            "address_id",
            "address_id",
            "entity_id"
          ],
          "relations": {
            "entity_id": "public.entities.id",
            "address_id": "public.addresses.id"
          },
          "referencedBy": {},
          "uindex": {
            "entity_addresses_other_entity_id_address_id_key": [
              "entity_id",
              "address_id"
            ],
            "entity_addresses_other_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "is_hq",
            "entity_id",
            "id",
            "address_id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "entity_id",
            "3": "address_id",
            "4": "is_hq",
            "5": "created_at"
          },
          "rels": {
            "public.entity_addresses_other.entity_id-public.entities.id": "M-1",
            "public.entity_addresses_other.address_id-public.addresses.id": "M-1"
          },
          "rels_new": {
            "public.entity_addresses_other.entity_id-public.entities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity"
            },
            "public.entity_addresses_other.address_id-public.addresses.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "address"
            }
          }
        }
      },
      "entities": {
        "properties": {
          "schema_name": "public",
          "table_name": "entities",
          "columns": {
            "dump_id": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "public.pb_dump.id",
              "unique": true
            },
            "description": {
              "id": 4,
              "type": "citext",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "status": {
              "id": 5,
              "type": "smallint",
              "default": "0",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "resolvers": {
              "id": 8,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 9,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "year_founded": {
              "id": 11,
              "type": "smallint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "dummy_col": {
              "id": 12,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "investment_count": {
              "id": 13,
              "type": "smallint",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "logo_path": {
              "id": 14,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "linkedin_url": {
              "id": 15,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "inv_portfolio_entity_keyword_count": {
              "id": 24,
              "type": "integer",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "sell_side_portfolio_keyword_resolved_temp": {
              "id": 26,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "sell_side_portfolio_country_resolved_temp": {
              "id": 27,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "sell_side_portfolio_industry_resolved_temp": {
              "id": 28,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "is_lp": {
              "id": 30,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "is_company": {
              "id": 31,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "domain": {
              "id": 33,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.domains.name",
              "unique": false
            },
            "source": {
              "id": 32,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.data_source.id",
              "unique": false
            },
            "entity_type_id": {
              "id": 6,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.entity_types.id",
              "unique": false
            },
            "inv_sec_pref_count": {
              "id": 19,
              "type": "smallint",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_inv_date": {
              "id": 21,
              "type": "date",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "is_investor": {
              "id": 29,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "last_funding_date": {
              "id": 20,
              "type": "date",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "inv_geo_pref_count": {
              "id": 18,
              "type": "smallint",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "keyword_count": {
              "id": 25,
              "type": "integer",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "inv_portfolio_entity_count": {
              "id": 23,
              "type": "integer",
              "default": "0",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "website_primary": {
              "id": 10,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "global_hq_address_id": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.addresses.id",
              "unique": false
            }
          },
          "id": 358730,
          "primary": [
            "id"
          ],
          "unique": [
            "dump_id",
            "id",
            "dump_id"
          ],
          "relations": {
            "domain": "public.domains.name",
            "source": "public.data_source.id",
            "entity_type_id": "public.entity_types.id",
            "dump_id": "public.pb_dump.id",
            "global_hq_address_id": "public.addresses.id"
          },
          "referencedBy": {
            "id": [
              "public.me_firms.entity_id_from_pbid_match",
              "public.portfolio_industries.entity_id",
              "public.portfolio_countries.entity_id",
              "public.portfolio_keywords.entity_id",
              "public.list_entity_ids.entity_id",
              "public.entity_scraping.entity_id",
              "public.entity_lp_fund_type_pref.entity_id",
              "public.entity_lp_types.entity_id",
              "public.entity_lp_details.entity_id",
              "public.company_industries.company_id",
              "public.entity_keywords.entity_id",
              "public.entity_company_details.entity_id",
              "public.entity_industry_pref.entity_id",
              "public.entity_continent_pref.entity_id",
              "public.entity_country_pref.entity_id",
              "public.entity_state_group_pref.entity_id",
              "public.entity_state_pref.entity_id",
              "public.entity_pb_other_pref.entity_id",
              "public.entity_stage_pref.entity_id",
              "public.entity_pb_indus_pref.entity_id",
              "public.entity_investment_preferences.entity_id",
              "public.enrichment_data.entity_id",
              "public.deal_investors.investor_id",
              "public.deals.sell_side_id",
              "public.people_roles.entity_id",
              "public.entity_types_relations_other.entity_id",
              "public.entity_addresses_other.entity_id"
            ]
          },
          "uindex": {
            "entities_dump_id_unique": [
              "dump_id"
            ],
            "entities_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "dump_id",
            "status",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "dump_id",
            "3": "name",
            "4": "description",
            "5": "status",
            "6": "entity_type_id",
            "7": "global_hq_address_id",
            "8": "resolvers",
            "9": "created_at",
            "10": "website_primary",
            "11": "year_founded",
            "12": "dummy_col",
            "13": "investment_count",
            "14": "logo_path",
            "15": "linkedin_url",
            "18": "inv_geo_pref_count",
            "19": "inv_sec_pref_count",
            "20": "last_funding_date",
            "21": "last_inv_date",
            "23": "inv_portfolio_entity_count",
            "24": "inv_portfolio_entity_keyword_count",
            "25": "keyword_count",
            "26": "sell_side_portfolio_keyword_resolved_temp",
            "27": "sell_side_portfolio_country_resolved_temp",
            "28": "sell_side_portfolio_industry_resolved_temp",
            "29": "is_investor",
            "30": "is_lp",
            "31": "is_company",
            "32": "source",
            "33": "domain"
          },
          "rels": {
            "public.entities.id-public.me_firms.entity_id_from_pbid_match": "1-M",
            "public.entities.id-public.portfolio_industries.entity_id": "1-M",
            "public.entities.id-public.portfolio_countries.entity_id": "1-M",
            "public.entities.id-public.portfolio_keywords.entity_id": "1-M",
            "public.entities.id-public.list_entity_ids.entity_id": "1-M",
            "public.entities.id-public.entity_scraping.entity_id": "1-1",
            "public.entities.id-public.entity_lp_fund_type_pref.entity_id": "1-M",
            "public.entities.id-public.entity_lp_types.entity_id": "1-M",
            "public.entities.id-public.entity_lp_details.entity_id": "1-1",
            "public.entities.id-public.company_industries.company_id": "1-M",
            "public.entities.id-public.entity_keywords.entity_id": "1-M",
            "public.entities.id-public.entity_company_details.entity_id": "1-M",
            "public.entities.id-public.entity_industry_pref.entity_id": "1-M",
            "public.entities.id-public.entity_continent_pref.entity_id": "1-M",
            "public.entities.id-public.entity_country_pref.entity_id": "1-M",
            "public.entities.id-public.entity_state_group_pref.entity_id": "1-M",
            "public.entities.id-public.entity_state_pref.entity_id": "1-M",
            "public.entities.id-public.entity_pb_other_pref.entity_id": "1-M",
            "public.entities.id-public.entity_stage_pref.entity_id": "1-M",
            "public.entities.id-public.entity_pb_indus_pref.entity_id": "1-M",
            "public.entities.id-public.entity_investment_preferences.entity_id": "1-1",
            "public.entities.id-public.enrichment_data.entity_id": "1-1",
            "public.entities.id-public.deal_investors.investor_id": "1-M",
            "public.entities.id-public.deals.sell_side_id": "1-M",
            "public.entities.id-public.people_roles.entity_id": "1-M",
            "public.entities.id-public.entity_types_relations_other.entity_id": "1-M",
            "public.entities.id-public.entity_addresses_other.entity_id": "1-M",
            "public.entities.domain-public.domains.name": "M-1",
            "public.entities.source-public.data_source.id": "M-1",
            "public.entities.entity_type_id-public.entity_types.id": "M-1",
            "public.entities.dump_id-public.pb_dump.id": "1-1",
            "public.entities.global_hq_address_id-public.addresses.id": "M-1"
          },
          "rels_new": {
            "public.entities.id-public.me_firms.entity_id_from_pbid_match": {
              "type": "1-M",
              "direct": "in",
              "alias": "me_firms"
            },
            "public.entities.id-public.portfolio_industries.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "portfolio_industries"
            },
            "public.entities.id-public.portfolio_countries.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "portfolio_countries"
            },
            "public.entities.id-public.portfolio_keywords.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "portfolio_keywords"
            },
            "public.entities.id-public.list_entity_ids.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "list_entity_ids"
            },
            "public.entities.id-public.entity_scraping.entity_id": {
              "type": "1-1",
              "direct": "in",
              "alias": "entity_scraping"
            },
            "public.entities.id-public.entity_lp_fund_type_pref.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_lp_fund_type_prefs"
            },
            "public.entities.id-public.entity_lp_types.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_lp_types"
            },
            "public.entities.id-public.entity_lp_details.entity_id": {
              "type": "1-1",
              "direct": "in",
              "alias": "entity_lp_detail"
            },
            "public.entities.id-public.company_industries.company_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "company_industries"
            },
            "public.entities.id-public.entity_keywords.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_keywords"
            },
            "public.entities.id-public.entity_company_details.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_company_details"
            },
            "public.entities.id-public.entity_industry_pref.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_industry_prefs"
            },
            "public.entities.id-public.entity_continent_pref.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_continent_prefs"
            },
            "public.entities.id-public.entity_country_pref.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_country_prefs"
            },
            "public.entities.id-public.entity_state_group_pref.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_state_group_prefs"
            },
            "public.entities.id-public.entity_state_pref.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_state_prefs"
            },
            "public.entities.id-public.entity_pb_other_pref.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_pb_other_prefs"
            },
            "public.entities.id-public.entity_stage_pref.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_stage_prefs"
            },
            "public.entities.id-public.entity_pb_indus_pref.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_pb_indus_prefs"
            },
            "public.entities.id-public.entity_investment_preferences.entity_id": {
              "type": "1-1",
              "direct": "in",
              "alias": "entity_investment_preference"
            },
            "public.entities.id-public.enrichment_data.entity_id": {
              "type": "1-1",
              "direct": "in",
              "alias": "enrichment_datum"
            },
            "public.entities.id-public.deal_investors.investor_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "deal_investors"
            },
            "public.entities.id-public.deals.sell_side_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "deals"
            },
            "public.entities.id-public.people_roles.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "people_roles"
            },
            "public.entities.id-public.entity_types_relations_other.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_types_relations_others"
            },
            "public.entities.id-public.entity_addresses_other.entity_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_addresses_others"
            },
            "public.entities.domain-public.domains.name": {
              "type": "M-1",
              "direct": "out",
              "alias": "domain"
            },
            "public.entities.source-public.data_source.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "data_source"
            },
            "public.entities.entity_type_id-public.entity_types.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "entity_type"
            },
            "public.entities.dump_id-public.pb_dump.id": {
              "type": "1-1",
              "direct": "out",
              "alias": "pb_dump"
            },
            "public.entities.global_hq_address_id-public.addresses.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "address"
            }
          }
        }
      },
      "addresses": {
        "properties": {
          "schema_name": "public",
          "table_name": "addresses",
          "columns": {
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "state_id_new": {
              "id": 13,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_states.id",
              "unique": false
            },
            "country_id": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_countries.id",
              "unique": false
            },
            "super_region_id": {
              "id": 8,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_super_regions.id",
              "unique": false
            },
            "line2": {
              "id": 3,
              "type": "citext",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "zip": {
              "id": 5,
              "type": "citext",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 9,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "city": {
              "id": 4,
              "type": "citext",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "city_id": {
              "id": 10,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_cities.id",
              "unique": false
            },
            "city_id_new": {
              "id": 12,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_cities.id",
              "unique": false
            },
            "line1": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "state_name_temp": {
              "id": 11,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "state_id": {
              "id": 6,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_states.id",
              "unique": false
            }
          },
          "id": 358706,
          "primary": [
            "id"
          ],
          "unique": [
            "id"
          ],
          "relations": {
            "state_id_new": "public.geo_states.id",
            "country_id": "public.geo_countries.id",
            "super_region_id": "public.geo_super_regions.id",
            "city_id": "public.geo_cities.id",
            "city_id_new": "public.geo_cities.id",
            "state_id": "public.geo_states.id"
          },
          "referencedBy": {
            "id": [
              "public.entity_addresses_other.address_id",
              "public.entities.global_hq_address_id"
            ]
          },
          "uindex": {
            "addresses_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "line1",
            "3": "line2",
            "4": "city",
            "5": "zip",
            "6": "state_id",
            "7": "country_id",
            "8": "super_region_id",
            "9": "created_at",
            "10": "city_id",
            "11": "state_name_temp",
            "12": "city_id_new",
            "13": "state_id_new"
          },
          "rels": {
            "public.addresses.id-public.entity_addresses_other.address_id": "1-M",
            "public.addresses.id-public.entities.global_hq_address_id": "1-M",
            "public.addresses.state_id_new-public.geo_states.id": "M-1",
            "public.addresses.country_id-public.geo_countries.id": "M-1",
            "public.addresses.super_region_id-public.geo_super_regions.id": "M-1",
            "public.addresses.city_id-public.geo_cities.id": "M-1",
            "public.addresses.city_id_new-public.geo_cities.id": "M-1",
            "public.addresses.state_id-public.geo_states.id": "M-1"
          },
          "rels_new": {
            "public.addresses.id-public.entity_addresses_other.address_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_addresses_others"
            },
            "public.addresses.id-public.entities.global_hq_address_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entities"
            },
            "public.addresses.state_id_new-public.geo_states.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_state_by_state_id_new"
            },
            "public.addresses.country_id-public.geo_countries.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_country"
            },
            "public.addresses.super_region_id-public.geo_super_regions.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_super_region"
            },
            "public.addresses.city_id-public.geo_cities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_city_by_city_id"
            },
            "public.addresses.city_id_new-public.geo_cities.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_city_by_city_id_new"
            },
            "public.addresses.state_id-public.geo_states.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_state_by_state_id"
            }
          }
        }
      },
      "geo_super_regions": {
        "properties": {
          "schema_name": "public",
          "table_name": "geo_super_regions",
          "columns": {
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 358695,
          "primary": [
            "id"
          ],
          "unique": [
            "name",
            "id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.entity_continent_pref.geo_continent_id",
              "public.addresses.super_region_id"
            ]
          },
          "uindex": {
            "geo_super_regions_name_key": [
              "name"
            ],
            "geo_super_regions_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "name",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "created_at"
          },
          "rels": {
            "public.geo_super_regions.id-public.entity_continent_pref.geo_continent_id": "1-M",
            "public.geo_super_regions.id-public.addresses.super_region_id": "1-M"
          },
          "rels_new": {
            "public.geo_super_regions.id-public.entity_continent_pref.geo_continent_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_continent_prefs"
            },
            "public.geo_super_regions.id-public.addresses.super_region_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "addresses"
            }
          }
        }
      },
      "geo_countries": {
        "properties": {
          "schema_name": "public",
          "table_name": "geo_countries",
          "columns": {
            "dial_code": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "country_code": {
              "id": 4,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 358684,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "name",
            "country_code"
          ],
          "relations": {},
          "referencedBy": {
            "country_code": [
              "public.user_meta.country_code"
            ],
            "id": [
              "public.portfolio_countries.country_id",
              "public.entity_country_pref.geo_country_id",
              "public.addresses.country_id",
              "public.geo_states.country_id"
            ]
          },
          "uindex": {
            "geo_countries_pkey": [
              "id"
            ],
            "geo_countries_name_key": [
              "name"
            ],
            "geo_countries_country_code_key": [
              "country_code"
            ]
          },
          "notnulls": [
            "id",
            "name"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "created_at",
            "4": "country_code",
            "5": "dial_code"
          },
          "rels": {
            "public.geo_countries.country_code-public.user_meta.country_code": "1-M",
            "public.geo_countries.id-public.portfolio_countries.country_id": "1-M",
            "public.geo_countries.id-public.entity_country_pref.geo_country_id": "1-M",
            "public.geo_countries.id-public.addresses.country_id": "1-M",
            "public.geo_countries.id-public.geo_states.country_id": "1-M"
          },
          "rels_new": {
            "public.geo_countries.country_code-public.user_meta.country_code": {
              "type": "1-M",
              "direct": "in",
              "alias": "user_metas"
            },
            "public.geo_countries.id-public.portfolio_countries.country_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "portfolio_countries"
            },
            "public.geo_countries.id-public.entity_country_pref.geo_country_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_country_prefs"
            },
            "public.geo_countries.id-public.addresses.country_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "addresses"
            },
            "public.geo_countries.id-public.geo_states.country_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "geo_states"
            }
          }
        }
      },
      "geo_states": {
        "properties": {
          "schema_name": "public",
          "table_name": "geo_states",
          "columns": {
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "address_count_new": {
              "id": 6,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "address_count": {
              "id": 4,
              "type": "integer",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "name": {
              "id": 2,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "country_id": {
              "id": 5,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "public.geo_countries.id",
              "unique": true
            }
          },
          "id": 358673,
          "primary": [
            "id"
          ],
          "unique": [
            "id",
            "name",
            "country_id",
            "country_id"
          ],
          "relations": {
            "country_id": "public.geo_countries.id"
          },
          "referencedBy": {
            "id": [
              "public.geo_cities.state_id",
              "public.geo_cities.replace_state_id",
              "public.geo_state_group_states.geo_state_id",
              "public.entity_state_pref.geo_state_id",
              "public.addresses.state_id_new",
              "public.addresses.state_id"
            ]
          },
          "uindex": {
            "geo_states_pkey": [
              "id"
            ],
            "geo_states_name_country_id_key": [
              "name",
              "country_id"
            ]
          },
          "notnulls": [
            "id",
            "name"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "created_at",
            "4": "address_count",
            "5": "country_id",
            "6": "address_count_new"
          },
          "rels": {
            "public.geo_states.id-public.geo_cities.state_id": "1-M",
            "public.geo_states.id-public.geo_cities.replace_state_id": "1-M",
            "public.geo_states.id-public.geo_state_group_states.geo_state_id": "1-M",
            "public.geo_states.id-public.entity_state_pref.geo_state_id": "1-M",
            "public.geo_states.id-public.addresses.state_id_new": "1-M",
            "public.geo_states.id-public.addresses.state_id": "1-M",
            "public.geo_states.country_id-public.geo_countries.id": "M-1"
          },
          "rels_new": {
            "public.geo_states.id-public.geo_cities.state_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "geo_cities_by_state_id"
            },
            "public.geo_states.id-public.geo_cities.replace_state_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "geo_cities_by_replace_state_id"
            },
            "public.geo_states.id-public.geo_state_group_states.geo_state_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "geo_state_group_states"
            },
            "public.geo_states.id-public.entity_state_pref.geo_state_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_state_prefs"
            },
            "public.geo_states.id-public.addresses.state_id_new": {
              "type": "1-M",
              "direct": "in",
              "alias": "addresses_by_state_id_new"
            },
            "public.geo_states.id-public.addresses.state_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "addresses_by_state_id"
            },
            "public.geo_states.country_id-public.geo_countries.id": {
              "type": "M-1",
              "direct": "out",
              "alias": "geo_country"
            }
          }
        }
      },
      "entity_types": {
        "properties": {
          "schema_name": "public",
          "table_name": "entity_types",
          "columns": {
            "name": {
              "id": 2,
              "type": "citext",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at": {
              "id": 3,
              "type": "integer",
              "default": "(EXTRACT(epoch FROM now()))::integer",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 358662,
          "primary": [
            "id"
          ],
          "unique": [
            "name",
            "id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.entity_types_relations_other.entity_type_id",
              "public.entities.entity_type_id"
            ]
          },
          "uindex": {
            "entity_types_name_key": [
              "name"
            ],
            "entity_types_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "name",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "name",
            "3": "created_at"
          },
          "rels": {
            "public.entity_types.id-public.entity_types_relations_other.entity_type_id": "1-M",
            "public.entity_types.id-public.entities.entity_type_id": "1-M"
          },
          "rels_new": {
            "public.entity_types.id-public.entity_types_relations_other.entity_type_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entity_types_relations_others"
            },
            "public.entity_types.id-public.entities.entity_type_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "entities"
            }
          }
        }
      },
      "pb_dump": {
        "properties": {
          "schema_name": "public",
          "table_name": "pb_dump",
          "columns": {
            "vert_res": {
              "id": 9,
              "type": "boolean",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "cos_valuation_done": {
              "id": 12,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "cos_keywords_done": {
              "id": 13,
              "type": "boolean",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "cos_indus_done": {
              "id": 10,
              "type": "boolean",
              "default": "false",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 2,
              "type": "timestamp without time zone",
              "default": "now()",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "lp_ob": {
              "id": 11,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "resolvers": {
              "id": 6,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "investor_ob": {
              "id": 4,
              "type": "json",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "company_ob": {
              "id": 7,
              "type": "jsonb",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "pbid": {
              "id": 3,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "text",
              "default": "gen_random_uuid()",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "indus_res": {
              "id": 8,
              "type": "boolean",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 16505,
          "primary": [
            "id"
          ],
          "unique": [
            "pbid",
            "id"
          ],
          "relations": {},
          "referencedBy": {
            "id": [
              "public.entities.dump_id"
            ]
          },
          "uindex": {
            "pb_dump_pbid_uindex": [
              "pbid"
            ],
            "pb_dump_pkey": [
              "id"
            ]
          },
          "notnulls": [
            "created_at",
            "pbid",
            "id"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "created_at",
            "3": "pbid",
            "4": "investor_ob",
            "6": "resolvers",
            "7": "company_ob",
            "8": "indus_res",
            "9": "vert_res",
            "10": "cos_indus_done",
            "11": "lp_ob",
            "12": "cos_valuation_done",
            "13": "cos_keywords_done"
          },
          "rels": {
            "public.pb_dump.id-public.entities.dump_id": "1-1"
          },
          "rels_new": {
            "public.pb_dump.id-public.entities.dump_id": {
              "type": "1-1",
              "direct": "in",
              "alias": "entity"
            }
          }
        }
      }
    },
    "auth": {
      "su_webauthn_account_recovery_tokens": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_webauthn_account_recovery_tokens",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": false
            },
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": false
            },
            "token": {
              "id": 5,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "user_id": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": true
            },
            "expires_at": {
              "id": 6,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "email": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 12979186,
          "primary": [
            "app_id",
            "token",
            "tenant_id",
            "user_id"
          ],
          "unique": [
            "tenant_id",
            "app_id",
            "user_id",
            "user_id",
            "tenant_id",
            "app_id",
            "token"
          ],
          "relations": {
            "tenant_id": "auth.su_all_auth_recipe_users.app_id",
            "app_id": "auth.su_all_auth_recipe_users.app_id",
            "user_id": "auth.su_all_auth_recipe_users.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "webauthn_account_recovery_token_pkey": [
              "tenant_id",
              "app_id",
              "user_id",
              "token"
            ]
          },
          "notnulls": [
            "app_id",
            "tenant_id",
            "token",
            "user_id",
            "expires_at",
            "email"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "user_id",
            "4": "email",
            "5": "token",
            "6": "expires_at"
          },
          "rels": {
            "auth.su_webauthn_account_recovery_tokens.tenant_id-auth.su_all_auth_recipe_users.app_id": "M-1",
            "auth.su_webauthn_account_recovery_tokens.app_id-auth.su_all_auth_recipe_users.app_id": "M-1",
            "auth.su_webauthn_account_recovery_tokens.user_id-auth.su_all_auth_recipe_users.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_webauthn_account_recovery_tokens.tenant_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_tenant_id"
            },
            "auth.su_webauthn_account_recovery_tokens.app_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_app_id"
            },
            "auth.su_webauthn_account_recovery_tokens.user_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_user_id"
            }
          }
        }
      },
      "su_webauthn_credentials": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_webauthn_credentials",
          "columns": {
            "counter": {
              "id": 5,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_id": {
              "id": 4,
              "type": "character(36)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_webauthn_users.app_id",
              "unique": false
            },
            "rp_id": {
              "id": 3,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "app_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_webauthn_users.app_id",
              "unique": true
            },
            "id": {
              "id": 1,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "updated_at": {
              "id": 9,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "transports": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 8,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "public_key": {
              "id": 6,
              "type": "bytea",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 12979172,
          "primary": [
            "rp_id",
            "app_id",
            "id"
          ],
          "unique": [
            "rp_id",
            "app_id",
            "id",
            "app_id"
          ],
          "relations": {
            "user_id": "auth.su_webauthn_users.app_id",
            "app_id": "auth.su_webauthn_users.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_webauthn_credentials_pkey": [
              "rp_id",
              "app_id",
              "id"
            ]
          },
          "notnulls": [
            "counter",
            "rp_id",
            "app_id",
            "id",
            "updated_at",
            "transports",
            "created_at",
            "public_key"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "app_id",
            "3": "rp_id",
            "4": "user_id",
            "5": "counter",
            "6": "public_key",
            "7": "transports",
            "8": "created_at",
            "9": "updated_at"
          },
          "rels": {
            "auth.su_webauthn_credentials.user_id-auth.su_webauthn_users.app_id": "M-1",
            "auth.su_webauthn_credentials.app_id-auth.su_webauthn_users.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_webauthn_credentials.user_id-auth.su_webauthn_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_webauthn_user_by_user_id"
            },
            "auth.su_webauthn_credentials.app_id-auth.su_webauthn_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_webauthn_user_by_app_id"
            }
          }
        }
      },
      "su_webauthn_generated_options": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_webauthn_generated_options",
          "columns": {
            "user_presence_required": {
              "id": 11,
              "type": "boolean",
              "default": "false",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": false
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": false
            },
            "created_at": {
              "id": 10,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_verification": {
              "id": 12,
              "type": "character varying(12)",
              "default": "'preferred'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "expires_at": {
              "id": 9,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "challenge": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "email": {
              "id": 5,
              "type": "character varying(256)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "rp_id": {
              "id": 6,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "rp_name": {
              "id": 7,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "origin": {
              "id": 8,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 12979155,
          "primary": [
            "tenant_id",
            "app_id",
            "id"
          ],
          "unique": [
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "id"
          ],
          "relations": {
            "app_id": "auth.su_tenants.app_id",
            "tenant_id": "auth.su_tenants.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_webauthn_generated_options_pkey": [
              "app_id",
              "tenant_id",
              "id"
            ]
          },
          "notnulls": [
            "user_presence_required",
            "tenant_id",
            "app_id",
            "created_at",
            "user_verification",
            "id",
            "expires_at",
            "challenge",
            "rp_id",
            "rp_name",
            "origin"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "id",
            "4": "challenge",
            "5": "email",
            "6": "rp_id",
            "7": "rp_name",
            "8": "origin",
            "9": "expires_at",
            "10": "created_at",
            "11": "user_presence_required",
            "12": "user_verification"
          },
          "rels": {
            "auth.su_webauthn_generated_options.app_id-auth.su_tenants.app_id": "M-1",
            "auth.su_webauthn_generated_options.tenant_id-auth.su_tenants.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_webauthn_generated_options.app_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_app_id"
            },
            "auth.su_webauthn_generated_options.tenant_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_tenant_id"
            }
          }
        }
      },
      "su_webauthn_user_to_tenant": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_webauthn_user_to_tenant",
          "columns": {
            "user_id": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": true
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": true
            },
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": true
            },
            "email": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 12979140,
          "primary": [
            "user_id",
            "app_id",
            "tenant_id"
          ],
          "unique": [
            "user_id",
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "tenant_id",
            "email",
            "app_id",
            "tenant_id",
            "email",
            "app_id",
            "user_id"
          ],
          "relations": {
            "app_id": "auth.su_all_auth_recipe_users.app_id",
            "tenant_id": "auth.su_all_auth_recipe_users.app_id",
            "user_id": "auth.su_all_auth_recipe_users.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_webauthn_user_to_tenant_pkey": [
              "user_id",
              "app_id",
              "tenant_id"
            ],
            "su_webauthn_user_to_tenant_email_key": [
              "app_id",
              "tenant_id",
              "email"
            ]
          },
          "notnulls": [
            "user_id",
            "app_id",
            "tenant_id",
            "email"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "user_id",
            "4": "email"
          },
          "rels": {
            "auth.su_webauthn_user_to_tenant.app_id-auth.su_all_auth_recipe_users.app_id": "M-1",
            "auth.su_webauthn_user_to_tenant.tenant_id-auth.su_all_auth_recipe_users.app_id": "M-1",
            "auth.su_webauthn_user_to_tenant.user_id-auth.su_all_auth_recipe_users.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_webauthn_user_to_tenant.app_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_app_id"
            },
            "auth.su_webauthn_user_to_tenant.tenant_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_tenant_id"
            },
            "auth.su_webauthn_user_to_tenant.user_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_user_id"
            }
          }
        }
      },
      "su_webauthn_users": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_webauthn_users",
          "columns": {
            "user_id": {
              "id": 2,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": true
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": true
            },
            "rp_id": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "email": {
              "id": 3,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "time_joined": {
              "id": 5,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 12979127,
          "primary": [
            "app_id",
            "user_id"
          ],
          "unique": [
            "user_id",
            "app_id",
            "app_id",
            "user_id"
          ],
          "relations": {
            "user_id": "auth.su_app_id_to_user_id.app_id",
            "app_id": "auth.su_app_id_to_user_id.app_id"
          },
          "referencedBy": {
            "app_id": [
              "auth.su_webauthn_credentials.user_id",
              "auth.su_webauthn_credentials.app_id"
            ]
          },
          "uindex": {
            "su_webauthn_users_pkey": [
              "user_id",
              "app_id"
            ]
          },
          "notnulls": [
            "user_id",
            "app_id",
            "rp_id",
            "email",
            "time_joined"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "user_id",
            "3": "email",
            "4": "rp_id",
            "5": "time_joined"
          },
          "rels": {
            "auth.su_webauthn_users.app_id-auth.su_webauthn_credentials.user_id": "1-M",
            "auth.su_webauthn_users.app_id-auth.su_webauthn_credentials.app_id": "1-M",
            "auth.su_webauthn_users.user_id-auth.su_app_id_to_user_id.app_id": "M-1",
            "auth.su_webauthn_users.app_id-auth.su_app_id_to_user_id.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_webauthn_users.app_id-auth.su_webauthn_credentials.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_webauthn_credentials_by_user_id"
            },
            "auth.su_webauthn_users.app_id-auth.su_webauthn_credentials.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_webauthn_credentials_by_app_id"
            },
            "auth.su_webauthn_users.user_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_user_id"
            },
            "auth.su_webauthn_users.app_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_app_id"
            }
          }
        }
      },
      "su_oauth_logout_challenges": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_oauth_logout_challenges",
          "columns": {
            "time_created": {
              "id": 7,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "session_handle": {
              "id": 5,
              "type": "character varying(128)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "state": {
              "id": 6,
              "type": "character varying(128)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "post_logout_redirect_uri": {
              "id": 4,
              "type": "character varying(1024)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_oauth_clients.app_id",
              "unique": true
            },
            "challenge": {
              "id": 2,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "client_id": {
              "id": 3,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_oauth_clients.app_id",
              "unique": false
            }
          },
          "id": 4779356,
          "primary": [
            "challenge",
            "app_id"
          ],
          "unique": [
            "app_id",
            "challenge",
            "app_id"
          ],
          "relations": {
            "app_id": "auth.su_oauth_clients.app_id",
            "client_id": "auth.su_oauth_clients.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_oauth_logout_challenges_pkey": [
              "app_id",
              "challenge"
            ]
          },
          "notnulls": [
            "time_created",
            "app_id",
            "challenge",
            "client_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "challenge",
            "3": "client_id",
            "4": "post_logout_redirect_uri",
            "5": "session_handle",
            "6": "state",
            "7": "time_created"
          },
          "rels": {
            "auth.su_oauth_logout_challenges.app_id-auth.su_oauth_clients.app_id": "M-1",
            "auth.su_oauth_logout_challenges.client_id-auth.su_oauth_clients.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_oauth_logout_challenges.app_id-auth.su_oauth_clients.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_oauth_client_by_app_id"
            },
            "auth.su_oauth_logout_challenges.client_id-auth.su_oauth_clients.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_oauth_client_by_client_id"
            }
          }
        }
      },
      "su_oauth_m2m_tokens": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_oauth_m2m_tokens",
          "columns": {
            "iat": {
              "id": 3,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_oauth_clients.app_id",
              "unique": true
            },
            "client_id": {
              "id": 2,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_oauth_clients.app_id",
              "unique": true
            },
            "exp": {
              "id": 4,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4779343,
          "primary": [
            "iat",
            "app_id",
            "client_id"
          ],
          "unique": [
            "iat",
            "client_id",
            "app_id",
            "client_id",
            "app_id"
          ],
          "relations": {
            "app_id": "auth.su_oauth_clients.app_id",
            "client_id": "auth.su_oauth_clients.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_oauth_m2m_tokens_pkey": [
              "iat",
              "client_id",
              "app_id"
            ]
          },
          "notnulls": [
            "iat",
            "app_id",
            "client_id",
            "exp"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "client_id",
            "3": "iat",
            "4": "exp"
          },
          "rels": {
            "auth.su_oauth_m2m_tokens.app_id-auth.su_oauth_clients.app_id": "M-1",
            "auth.su_oauth_m2m_tokens.client_id-auth.su_oauth_clients.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_oauth_m2m_tokens.app_id-auth.su_oauth_clients.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_oauth_client_by_app_id"
            },
            "auth.su_oauth_m2m_tokens.client_id-auth.su_oauth_clients.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_oauth_client_by_client_id"
            }
          }
        }
      },
      "su_oauth_sessions": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_oauth_sessions",
          "columns": {
            "client_id": {
              "id": 3,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_oauth_clients.app_id",
              "unique": false
            },
            "session_handle": {
              "id": 4,
              "type": "character varying(128)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "exp": {
              "id": 8,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "jti": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "external_refresh_token": {
              "id": 5,
              "type": "character varying(255)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "internal_refresh_token": {
              "id": 6,
              "type": "character varying(255)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "app_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": false,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_oauth_clients.app_id",
              "unique": false
            },
            "gid": {
              "id": 1,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4779324,
          "primary": [
            "gid"
          ],
          "unique": [
            "external_refresh_token",
            "external_refresh_token",
            "internal_refresh_token",
            "gid"
          ],
          "relations": {
            "client_id": "auth.su_oauth_clients.app_id",
            "app_id": "auth.su_oauth_clients.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_oauth_sessions_external_refresh_token_key": [
              "external_refresh_token"
            ],
            "su_oauth_sessions_internal_refresh_token_key": [
              "internal_refresh_token"
            ],
            "su_oauth_sessions_pkey": [
              "gid"
            ]
          },
          "notnulls": [
            "client_id",
            "exp",
            "jti",
            "gid"
          ],
          "serials": [],
          "idToName": {
            "1": "gid",
            "2": "app_id",
            "3": "client_id",
            "4": "session_handle",
            "5": "external_refresh_token",
            "6": "internal_refresh_token",
            "7": "jti",
            "8": "exp"
          },
          "rels": {
            "auth.su_oauth_sessions.client_id-auth.su_oauth_clients.app_id": "M-1",
            "auth.su_oauth_sessions.app_id-auth.su_oauth_clients.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_oauth_sessions.client_id-auth.su_oauth_clients.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_oauth_client_by_client_id"
            },
            "auth.su_oauth_sessions.app_id-auth.su_oauth_clients.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_oauth_client_by_app_id"
            }
          }
        }
      },
      "su_oauth_clients": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_oauth_clients",
          "columns": {
            "client_secret": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "client_id": {
              "id": 2,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_apps.app_id",
              "unique": true
            },
            "enable_refresh_token_rotation": {
              "id": 4,
              "type": "boolean",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "is_client_credentials_only": {
              "id": 5,
              "type": "boolean",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4779312,
          "primary": [
            "client_id",
            "app_id"
          ],
          "unique": [
            "client_id",
            "app_id",
            "app_id"
          ],
          "relations": {
            "app_id": "auth.su_apps.app_id"
          },
          "referencedBy": {
            "app_id": [
              "auth.su_oauth_logout_challenges.app_id",
              "auth.su_oauth_logout_challenges.client_id",
              "auth.su_oauth_m2m_tokens.app_id",
              "auth.su_oauth_m2m_tokens.client_id",
              "auth.su_oauth_sessions.client_id",
              "auth.su_oauth_sessions.app_id"
            ]
          },
          "uindex": {
            "su_oauth_clients_pkey": [
              "client_id",
              "app_id"
            ]
          },
          "notnulls": [
            "client_id",
            "app_id",
            "enable_refresh_token_rotation",
            "is_client_credentials_only"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "client_id",
            "3": "client_secret",
            "4": "enable_refresh_token_rotation",
            "5": "is_client_credentials_only"
          },
          "rels": {
            "auth.su_oauth_clients.app_id-auth.su_oauth_logout_challenges.app_id": "1-M",
            "auth.su_oauth_clients.app_id-auth.su_oauth_logout_challenges.client_id": "1-M",
            "auth.su_oauth_clients.app_id-auth.su_oauth_m2m_tokens.app_id": "1-M",
            "auth.su_oauth_clients.app_id-auth.su_oauth_m2m_tokens.client_id": "1-M",
            "auth.su_oauth_clients.app_id-auth.su_oauth_sessions.client_id": "1-M",
            "auth.su_oauth_clients.app_id-auth.su_oauth_sessions.app_id": "1-M",
            "auth.su_oauth_clients.app_id-auth.su_apps.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_oauth_clients.app_id-auth.su_oauth_logout_challenges.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_oauth_logout_challenges_by_app_id"
            },
            "auth.su_oauth_clients.app_id-auth.su_oauth_logout_challenges.client_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_oauth_logout_challenges_by_client_id"
            },
            "auth.su_oauth_clients.app_id-auth.su_oauth_m2m_tokens.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_oauth_m2m_tokens_by_app_id"
            },
            "auth.su_oauth_clients.app_id-auth.su_oauth_m2m_tokens.client_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_oauth_m2m_tokens_by_client_id"
            },
            "auth.su_oauth_clients.app_id-auth.su_oauth_sessions.client_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_oauth_sessions_by_client_id"
            },
            "auth.su_oauth_clients.app_id-auth.su_oauth_sessions.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_oauth_sessions_by_app_id"
            },
            "auth.su_oauth_clients.app_id-auth.su_apps.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app"
            }
          }
        }
      },
      "su_bulk_import_users": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_bulk_import_users",
          "columns": {
            "raw_data": {
              "id": 4,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "status": {
              "id": 5,
              "type": "character varying(128)",
              "default": "'NEW'::character varying",
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "error_msg": {
              "id": 6,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "id": {
              "id": 1,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "app_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_apps.app_id",
              "unique": false
            },
            "created_at": {
              "id": 7,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "updated_at": {
              "id": 8,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "primary_user_id": {
              "id": 3,
              "type": "character varying(36)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4779295,
          "primary": [
            "id",
            "app_id"
          ],
          "unique": [
            "app_id",
            "id",
            "app_id"
          ],
          "relations": {
            "app_id": "auth.su_apps.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_bulk_import_users_pkey": [
              "app_id",
              "id"
            ]
          },
          "notnulls": [
            "raw_data",
            "id",
            "app_id",
            "created_at",
            "updated_at"
          ],
          "serials": [],
          "idToName": {
            "1": "id",
            "2": "app_id",
            "3": "primary_user_id",
            "4": "raw_data",
            "5": "status",
            "6": "error_msg",
            "7": "created_at",
            "8": "updated_at"
          },
          "rels": {
            "auth.su_bulk_import_users.app_id-auth.su_apps.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_bulk_import_users.app_id-auth.su_apps.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_by_app_id"
            }
          }
        }
      },
      "su_totp_used_codes": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_totp_used_codes",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": false
            },
            "user_id": {
              "id": 3,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_totp_users.app_id",
              "unique": false
            },
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": false
            },
            "created_time_ms": {
              "id": 7,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "code": {
              "id": 4,
              "type": "character varying(8)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "is_valid": {
              "id": 5,
              "type": "boolean",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "expiry_time_ms": {
              "id": 6,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4779275,
          "primary": [
            "app_id",
            "tenant_id",
            "user_id",
            "created_time_ms"
          ],
          "unique": [
            "app_id",
            "user_id",
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "user_id",
            "created_time_ms"
          ],
          "relations": {
            "app_id": "auth.su_tenants.app_id",
            "user_id": "auth.su_totp_users.app_id",
            "tenant_id": "auth.su_tenants.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_totp_used_codes_pkey": [
              "app_id",
              "user_id",
              "tenant_id",
              "created_time_ms"
            ]
          },
          "notnulls": [
            "app_id",
            "user_id",
            "tenant_id",
            "created_time_ms",
            "code",
            "is_valid",
            "expiry_time_ms"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "user_id",
            "4": "code",
            "5": "is_valid",
            "6": "expiry_time_ms",
            "7": "created_time_ms"
          },
          "rels": {
            "auth.su_totp_used_codes.app_id-auth.su_totp_users.app_id": "M-1",
            "auth.su_totp_used_codes.user_id-auth.su_totp_users.app_id": "M-1",
            "auth.su_totp_used_codes.app_id-auth.su_tenants.app_id": "M-1",
            "auth.su_totp_used_codes.tenant_id-auth.su_tenants.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_totp_used_codes.app_id-auth.su_totp_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_totp_user_by_app_id"
            },
            "auth.su_totp_used_codes.user_id-auth.su_totp_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_totp_user_by_user_id"
            },
            "auth.su_totp_used_codes.app_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_app_id"
            },
            "auth.su_totp_used_codes.tenant_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_tenant_id"
            }
          }
        }
      },
      "su_totp_user_devices": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_totp_user_devices",
          "columns": {
            "secret_key": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "verified": {
              "id": 7,
              "type": "boolean",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 8,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "skew": {
              "id": 6,
              "type": "integer",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_totp_users.app_id",
              "unique": true
            },
            "user_id": {
              "id": 2,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_totp_users.app_id",
              "unique": true
            },
            "device_name": {
              "id": 3,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "period": {
              "id": 5,
              "type": "integer",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4779261,
          "primary": [
            "app_id",
            "user_id",
            "device_name"
          ],
          "unique": [
            "app_id",
            "user_id",
            "app_id",
            "user_id",
            "device_name"
          ],
          "relations": {
            "app_id": "auth.su_totp_users.app_id",
            "user_id": "auth.su_totp_users.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_totp_user_devices_pkey": [
              "app_id",
              "user_id",
              "device_name"
            ]
          },
          "notnulls": [
            "secret_key",
            "verified",
            "skew",
            "app_id",
            "user_id",
            "device_name",
            "period"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "user_id",
            "3": "device_name",
            "4": "secret_key",
            "5": "period",
            "6": "skew",
            "7": "verified",
            "8": "created_at"
          },
          "rels": {
            "auth.su_totp_user_devices.app_id-auth.su_totp_users.app_id": "M-1",
            "auth.su_totp_user_devices.user_id-auth.su_totp_users.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_totp_user_devices.app_id-auth.su_totp_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_totp_user_by_app_id"
            },
            "auth.su_totp_user_devices.user_id-auth.su_totp_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_totp_user_by_user_id"
            }
          }
        }
      },
      "su_totp_users": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_totp_users",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_apps.app_id",
              "unique": false
            },
            "user_id": {
              "id": 2,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4779249,
          "primary": [
            "app_id",
            "user_id"
          ],
          "unique": [
            "app_id",
            "app_id",
            "user_id"
          ],
          "relations": {
            "app_id": "auth.su_apps.app_id"
          },
          "referencedBy": {
            "app_id": [
              "auth.su_totp_used_codes.app_id",
              "auth.su_totp_used_codes.user_id",
              "auth.su_totp_user_devices.app_id",
              "auth.su_totp_user_devices.user_id"
            ]
          },
          "uindex": {
            "su_totp_users_pkey": [
              "app_id",
              "user_id"
            ]
          },
          "notnulls": [
            "app_id",
            "user_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "user_id"
          },
          "rels": {
            "auth.su_totp_users.app_id-auth.su_totp_used_codes.app_id": "1-M",
            "auth.su_totp_users.app_id-auth.su_totp_used_codes.user_id": "1-M",
            "auth.su_totp_users.app_id-auth.su_totp_user_devices.app_id": "1-M",
            "auth.su_totp_users.app_id-auth.su_totp_user_devices.user_id": "1-M",
            "auth.su_totp_users.app_id-auth.su_apps.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_totp_users.app_id-auth.su_totp_used_codes.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_totp_used_codes_by_app_id"
            },
            "auth.su_totp_users.app_id-auth.su_totp_used_codes.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_totp_used_codes_by_user_id"
            },
            "auth.su_totp_users.app_id-auth.su_totp_user_devices.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_totp_user_devices_by_app_id"
            },
            "auth.su_totp_users.app_id-auth.su_totp_user_devices.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_totp_user_devices_by_user_id"
            },
            "auth.su_totp_users.app_id-auth.su_apps.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_by_app_id"
            }
          }
        }
      },
      "su_dashboard_user_sessions": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_dashboard_user_sessions",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_dashboard_users.app_id",
              "unique": false
            },
            "time_created": {
              "id": 4,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "expiry": {
              "id": 5,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_id": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_dashboard_users.app_id",
              "unique": false
            },
            "session_id": {
              "id": 2,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4779236,
          "primary": [
            "session_id",
            "app_id"
          ],
          "unique": [
            "app_id",
            "session_id",
            "app_id"
          ],
          "relations": {
            "app_id": "auth.su_dashboard_users.app_id",
            "user_id": "auth.su_dashboard_users.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_dashboard_user_sessions_pkey": [
              "app_id",
              "session_id"
            ]
          },
          "notnulls": [
            "app_id",
            "time_created",
            "expiry",
            "user_id",
            "session_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "session_id",
            "3": "user_id",
            "4": "time_created",
            "5": "expiry"
          },
          "rels": {
            "auth.su_dashboard_user_sessions.app_id-auth.su_dashboard_users.app_id": "M-1",
            "auth.su_dashboard_user_sessions.user_id-auth.su_dashboard_users.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_dashboard_user_sessions.app_id-auth.su_dashboard_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_dashboard_user_by_app_id"
            },
            "auth.su_dashboard_user_sessions.user_id-auth.su_dashboard_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_dashboard_user_by_user_id"
            }
          }
        }
      },
      "su_dashboard_users": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_dashboard_users",
          "columns": {
            "time_joined": {
              "id": 5,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_apps.app_id",
              "unique": false
            },
            "email": {
              "id": 3,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "user_id": {
              "id": 2,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "password_hash": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4779220,
          "primary": [
            "app_id",
            "user_id"
          ],
          "unique": [
            "app_id",
            "app_id",
            "app_id",
            "email",
            "app_id",
            "app_id",
            "app_id",
            "user_id",
            "app_id"
          ],
          "relations": {
            "app_id": "auth.su_apps.app_id"
          },
          "referencedBy": {
            "app_id": [
              "auth.su_dashboard_user_sessions.app_id",
              "auth.su_dashboard_user_sessions.user_id"
            ]
          },
          "uindex": {
            "su_dashboard_users_email_key": [
              "app_id",
              "email"
            ],
            "su_dashboard_users_pkey": [
              "app_id",
              "user_id"
            ]
          },
          "notnulls": [
            "time_joined",
            "app_id",
            "email",
            "user_id",
            "password_hash"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "user_id",
            "3": "email",
            "4": "password_hash",
            "5": "time_joined"
          },
          "rels": {
            "auth.su_dashboard_users.app_id-auth.su_dashboard_user_sessions.app_id": "1-M",
            "auth.su_dashboard_users.app_id-auth.su_dashboard_user_sessions.user_id": "1-M",
            "auth.su_dashboard_users.app_id-auth.su_apps.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_dashboard_users.app_id-auth.su_dashboard_user_sessions.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_dashboard_user_sessions_by_app_id"
            },
            "auth.su_dashboard_users.app_id-auth.su_dashboard_user_sessions.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_dashboard_user_sessions_by_user_id"
            },
            "auth.su_dashboard_users.app_id-auth.su_apps.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_by_app_id"
            }
          }
        }
      },
      "su_userid_mapping": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_userid_mapping",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": true
            },
            "external_user_id": {
              "id": 3,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "external_user_id_info": {
              "id": 4,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "supertokens_user_id": {
              "id": 2,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": true
            }
          },
          "id": 4779202,
          "primary": [
            "external_user_id",
            "app_id",
            "supertokens_user_id"
          ],
          "unique": [
            "app_id",
            "app_id",
            "external_user_id",
            "app_id",
            "external_user_id",
            "app_id",
            "app_id",
            "app_id",
            "app_id",
            "supertokens_user_id",
            "app_id",
            "supertokens_user_id",
            "app_id",
            "external_user_id",
            "app_id",
            "external_user_id",
            "supertokens_user_id",
            "app_id",
            "supertokens_user_id",
            "app_id",
            "supertokens_user_id",
            "app_id",
            "app_id",
            "supertokens_user_id",
            "supertokens_user_id"
          ],
          "relations": {
            "app_id": "auth.su_app_id_to_user_id.app_id",
            "supertokens_user_id": "auth.su_app_id_to_user_id.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_userid_mapping_supertokens_user_id_key": [
              "app_id",
              "supertokens_user_id"
            ],
            "su_userid_mapping_pkey": [
              "app_id",
              "external_user_id",
              "supertokens_user_id"
            ],
            "su_userid_mapping_external_user_id_key": [
              "external_user_id",
              "app_id"
            ]
          },
          "notnulls": [
            "app_id",
            "external_user_id",
            "supertokens_user_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "supertokens_user_id",
            "3": "external_user_id",
            "4": "external_user_id_info"
          },
          "rels": {
            "auth.su_userid_mapping.app_id-auth.su_app_id_to_user_id.app_id": "M-1",
            "auth.su_userid_mapping.supertokens_user_id-auth.su_app_id_to_user_id.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_userid_mapping.app_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_app_id"
            },
            "auth.su_userid_mapping.supertokens_user_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_supertokens_user_id"
            }
          }
        }
      },
      "su_user_roles": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_user_roles",
          "columns": {
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": false
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": false
            },
            "role": {
              "id": 4,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_id": {
              "id": 3,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4779185,
          "primary": [
            "tenant_id",
            "role",
            "app_id",
            "user_id"
          ],
          "unique": [
            "user_id",
            "role",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id"
          ],
          "relations": {
            "tenant_id": "auth.su_tenants.app_id",
            "app_id": "auth.su_tenants.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_user_roles_pkey": [
              "user_id",
              "role",
              "tenant_id",
              "app_id"
            ]
          },
          "notnulls": [
            "tenant_id",
            "app_id",
            "role",
            "user_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "user_id",
            "4": "role"
          },
          "rels": {
            "auth.su_user_roles.tenant_id-auth.su_tenants.app_id": "M-1",
            "auth.su_user_roles.app_id-auth.su_tenants.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_user_roles.tenant_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_tenant_id"
            },
            "auth.su_user_roles.app_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_app_id"
            }
          }
        }
      },
      "su_role_permissions": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_role_permissions",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_roles.app_id",
              "unique": true
            },
            "role": {
              "id": 2,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_roles.app_id",
              "unique": true
            },
            "permission": {
              "id": 3,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4779170,
          "primary": [
            "app_id",
            "role",
            "permission"
          ],
          "unique": [
            "app_id",
            "role",
            "permission",
            "app_id",
            "role"
          ],
          "relations": {
            "app_id": "auth.su_roles.app_id",
            "role": "auth.su_roles.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_role_permissions_pkey": [
              "app_id",
              "role",
              "permission"
            ]
          },
          "notnulls": [
            "app_id",
            "role",
            "permission"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "role",
            "3": "permission"
          },
          "rels": {
            "auth.su_role_permissions.app_id-auth.su_roles.app_id": "M-1",
            "auth.su_role_permissions.role-auth.su_roles.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_role_permissions.app_id-auth.su_roles.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_role_by_app_id"
            },
            "auth.su_role_permissions.role-auth.su_roles.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_role_by_role"
            }
          }
        }
      },
      "su_roles": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_roles",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_apps.app_id",
              "unique": false
            },
            "role": {
              "id": 2,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4779158,
          "primary": [
            "app_id",
            "role"
          ],
          "unique": [
            "app_id",
            "role",
            "app_id"
          ],
          "relations": {
            "app_id": "auth.su_apps.app_id"
          },
          "referencedBy": {
            "app_id": [
              "auth.su_role_permissions.app_id",
              "auth.su_role_permissions.role"
            ]
          },
          "uindex": {
            "su_roles_pkey": [
              "app_id",
              "role"
            ]
          },
          "notnulls": [
            "app_id",
            "role"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "role"
          },
          "rels": {
            "auth.su_roles.app_id-auth.su_role_permissions.app_id": "1-M",
            "auth.su_roles.app_id-auth.su_role_permissions.role": "1-M",
            "auth.su_roles.app_id-auth.su_apps.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_roles.app_id-auth.su_role_permissions.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_role_permissions_by_app_id"
            },
            "auth.su_roles.app_id-auth.su_role_permissions.role": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_role_permissions_by_role"
            },
            "auth.su_roles.app_id-auth.su_apps.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_by_app_id"
            }
          }
        }
      },
      "su_user_metadata": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_user_metadata",
          "columns": {
            "user_metadata": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_apps.app_id",
              "unique": false
            },
            "user_id": {
              "id": 2,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4779144,
          "primary": [
            "app_id",
            "user_id"
          ],
          "unique": [
            "app_id",
            "app_id",
            "user_id"
          ],
          "relations": {
            "app_id": "auth.su_apps.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_user_metadata_pkey": [
              "app_id",
              "user_id"
            ]
          },
          "notnulls": [
            "user_metadata",
            "app_id",
            "user_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "user_id",
            "3": "user_metadata"
          },
          "rels": {
            "auth.su_user_metadata.app_id-auth.su_apps.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_user_metadata.app_id-auth.su_apps.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_by_app_id"
            }
          }
        }
      },
      "su_passwordless_codes": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_passwordless_codes",
          "columns": {
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_passwordless_devices.app_id",
              "unique": true
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_passwordless_devices.app_id",
              "unique": true
            },
            "link_code_hash": {
              "id": 5,
              "type": "character(44)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at": {
              "id": 6,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "device_id_hash": {
              "id": 4,
              "type": "character(44)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_passwordless_devices.app_id",
              "unique": false
            },
            "code_id": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4779128,
          "primary": [
            "tenant_id",
            "app_id",
            "code_id"
          ],
          "unique": [
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "link_code_hash",
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "tenant_id",
            "app_id",
            "app_id",
            "tenant_id",
            "code_id"
          ],
          "relations": {
            "tenant_id": "auth.su_passwordless_devices.app_id",
            "app_id": "auth.su_passwordless_devices.app_id",
            "device_id_hash": "auth.su_passwordless_devices.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_passwordless_codes_link_code_hash_key": [
              "app_id",
              "tenant_id",
              "link_code_hash"
            ],
            "su_passwordless_codes_pkey": [
              "app_id",
              "tenant_id",
              "code_id"
            ]
          },
          "notnulls": [
            "tenant_id",
            "app_id",
            "link_code_hash",
            "created_at",
            "device_id_hash",
            "code_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "code_id",
            "4": "device_id_hash",
            "5": "link_code_hash",
            "6": "created_at"
          },
          "rels": {
            "auth.su_passwordless_codes.tenant_id-auth.su_passwordless_devices.app_id": "M-1",
            "auth.su_passwordless_codes.app_id-auth.su_passwordless_devices.app_id": "M-1",
            "auth.su_passwordless_codes.device_id_hash-auth.su_passwordless_devices.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_passwordless_codes.tenant_id-auth.su_passwordless_devices.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_passwordless_device_by_tenant_id"
            },
            "auth.su_passwordless_codes.app_id-auth.su_passwordless_devices.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_passwordless_device_by_app_id"
            },
            "auth.su_passwordless_codes.device_id_hash-auth.su_passwordless_devices.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_passwordless_device_by_device_id_hash"
            }
          }
        }
      },
      "su_passwordless_devices": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_passwordless_devices",
          "columns": {
            "email": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": true
            },
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": true
            },
            "phone_number": {
              "id": 5,
              "type": "character varying(256)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "device_id_hash": {
              "id": 3,
              "type": "character(44)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "link_code_salt": {
              "id": 6,
              "type": "character(44)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "failed_attempts": {
              "id": 7,
              "type": "integer",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4779111,
          "primary": [
            "app_id",
            "tenant_id",
            "device_id_hash"
          ],
          "unique": [
            "device_id_hash",
            "tenant_id",
            "app_id",
            "app_id",
            "tenant_id"
          ],
          "relations": {
            "app_id": "auth.su_tenants.app_id",
            "tenant_id": "auth.su_tenants.app_id"
          },
          "referencedBy": {
            "app_id": [
              "auth.su_passwordless_codes.tenant_id",
              "auth.su_passwordless_codes.app_id",
              "auth.su_passwordless_codes.device_id_hash"
            ]
          },
          "uindex": {
            "su_passwordless_devices_pkey": [
              "device_id_hash",
              "tenant_id",
              "app_id"
            ]
          },
          "notnulls": [
            "app_id",
            "tenant_id",
            "device_id_hash",
            "link_code_salt",
            "failed_attempts"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "device_id_hash",
            "4": "email",
            "5": "phone_number",
            "6": "link_code_salt",
            "7": "failed_attempts"
          },
          "rels": {
            "auth.su_passwordless_devices.app_id-auth.su_passwordless_codes.tenant_id": "1-M",
            "auth.su_passwordless_devices.app_id-auth.su_passwordless_codes.app_id": "1-M",
            "auth.su_passwordless_devices.app_id-auth.su_passwordless_codes.device_id_hash": "1-M",
            "auth.su_passwordless_devices.app_id-auth.su_tenants.app_id": "M-1",
            "auth.su_passwordless_devices.tenant_id-auth.su_tenants.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_passwordless_devices.app_id-auth.su_passwordless_codes.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_passwordless_codes_by_tenant_id"
            },
            "auth.su_passwordless_devices.app_id-auth.su_passwordless_codes.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_passwordless_codes_by_app_id"
            },
            "auth.su_passwordless_devices.app_id-auth.su_passwordless_codes.device_id_hash": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_passwordless_codes_by_device_id_hash"
            },
            "auth.su_passwordless_devices.app_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_app_id"
            },
            "auth.su_passwordless_devices.tenant_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_tenant_id"
            }
          }
        }
      },
      "su_passwordless_user_to_tenant": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_passwordless_user_to_tenant",
          "columns": {
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": false
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": false
            },
            "user_id": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": true
            },
            "phone_number": {
              "id": 5,
              "type": "character varying(256)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "email": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4779091,
          "primary": [
            "tenant_id",
            "user_id",
            "app_id"
          ],
          "unique": [
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "user_id",
            "tenant_id",
            "app_id",
            "user_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "phone_number",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "email",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "phone_number",
            "tenant_id",
            "app_id",
            "email",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id"
          ],
          "relations": {
            "user_id": "auth.su_all_auth_recipe_users.app_id",
            "tenant_id": "auth.su_all_auth_recipe_users.app_id",
            "app_id": "auth.su_all_auth_recipe_users.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_passwordless_user_to_tenant_email_key": [
              "tenant_id",
              "app_id",
              "email"
            ],
            "su_passwordless_user_to_tenant_phone_number_key": [
              "tenant_id",
              "app_id",
              "phone_number"
            ],
            "su_passwordless_user_to_tenant_pkey": [
              "user_id",
              "tenant_id",
              "app_id"
            ]
          },
          "notnulls": [
            "tenant_id",
            "app_id",
            "user_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "user_id",
            "4": "email",
            "5": "phone_number"
          },
          "rels": {
            "auth.su_passwordless_user_to_tenant.user_id-auth.su_all_auth_recipe_users.app_id": "M-1",
            "auth.su_passwordless_user_to_tenant.tenant_id-auth.su_all_auth_recipe_users.app_id": "M-1",
            "auth.su_passwordless_user_to_tenant.app_id-auth.su_all_auth_recipe_users.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_passwordless_user_to_tenant.user_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_user_id"
            },
            "auth.su_passwordless_user_to_tenant.tenant_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_tenant_id"
            },
            "auth.su_passwordless_user_to_tenant.app_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_app_id"
            }
          }
        }
      },
      "su_passwordless_users": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_passwordless_users",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": false
            },
            "user_id": {
              "id": 2,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": true
            },
            "phone_number": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "email": {
              "id": 3,
              "type": "character varying(256)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "time_joined": {
              "id": 5,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4779072,
          "primary": [
            "app_id",
            "user_id"
          ],
          "unique": [
            "user_id",
            "app_id",
            "user_id",
            "app_id"
          ],
          "relations": {
            "user_id": "auth.su_app_id_to_user_id.app_id",
            "app_id": "auth.su_app_id_to_user_id.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_passwordless_users_pkey": [
              "user_id",
              "app_id"
            ]
          },
          "notnulls": [
            "app_id",
            "user_id",
            "time_joined"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "user_id",
            "3": "email",
            "4": "phone_number",
            "5": "time_joined"
          },
          "rels": {
            "auth.su_passwordless_users.user_id-auth.su_app_id_to_user_id.app_id": "M-1",
            "auth.su_passwordless_users.app_id-auth.su_app_id_to_user_id.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_passwordless_users.user_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_user_id"
            },
            "auth.su_passwordless_users.app_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_app_id"
            }
          }
        }
      },
      "su_jwt_signing_keys": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_jwt_signing_keys",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_apps.app_id",
              "unique": true
            },
            "key_id": {
              "id": 2,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "algorithm": {
              "id": 4,
              "type": "character varying(10)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "key_string": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at": {
              "id": 5,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4779058,
          "primary": [
            "app_id",
            "key_id"
          ],
          "unique": [
            "app_id",
            "app_id",
            "key_id"
          ],
          "relations": {
            "app_id": "auth.su_apps.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_jwt_signing_keys_pkey": [
              "app_id",
              "key_id"
            ]
          },
          "notnulls": [
            "app_id",
            "key_id",
            "algorithm",
            "key_string"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "key_id",
            "3": "key_string",
            "4": "algorithm",
            "5": "created_at"
          },
          "rels": {
            "auth.su_jwt_signing_keys.app_id-auth.su_apps.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_jwt_signing_keys.app_id-auth.su_apps.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_by_app_id"
            }
          }
        }
      },
      "su_thirdparty_user_to_tenant": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_thirdparty_user_to_tenant",
          "columns": {
            "user_id": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": true
            },
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": true
            },
            "third_party_id": {
              "id": 4,
              "type": "character varying(28)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": true
            },
            "third_party_user_id": {
              "id": 5,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4779043,
          "primary": [
            "app_id",
            "user_id",
            "tenant_id"
          ],
          "unique": [
            "user_id",
            "tenant_id",
            "third_party_id",
            "tenant_id",
            "app_id",
            "app_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "third_party_id",
            "third_party_user_id",
            "app_id",
            "app_id",
            "user_id",
            "tenant_id",
            "tenant_id",
            "third_party_user_id",
            "app_id",
            "tenant_id",
            "app_id"
          ],
          "relations": {
            "user_id": "auth.su_all_auth_recipe_users.app_id",
            "tenant_id": "auth.su_all_auth_recipe_users.app_id",
            "app_id": "auth.su_all_auth_recipe_users.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_thirdparty_user_to_tenant_pkey": [
              "user_id",
              "tenant_id",
              "app_id"
            ],
            "su_thirdparty_user_to_tenant_third_party_user_id_key": [
              "third_party_id",
              "tenant_id",
              "app_id",
              "third_party_user_id"
            ]
          },
          "notnulls": [
            "user_id",
            "tenant_id",
            "third_party_id",
            "app_id",
            "third_party_user_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "user_id",
            "4": "third_party_id",
            "5": "third_party_user_id"
          },
          "rels": {
            "auth.su_thirdparty_user_to_tenant.user_id-auth.su_all_auth_recipe_users.app_id": "M-1",
            "auth.su_thirdparty_user_to_tenant.tenant_id-auth.su_all_auth_recipe_users.app_id": "M-1",
            "auth.su_thirdparty_user_to_tenant.app_id-auth.su_all_auth_recipe_users.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_thirdparty_user_to_tenant.user_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_user_id"
            },
            "auth.su_thirdparty_user_to_tenant.tenant_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_tenant_id"
            },
            "auth.su_thirdparty_user_to_tenant.app_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_app_id"
            }
          }
        }
      },
      "su_thirdparty_users": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_thirdparty_users",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": false
            },
            "third_party_id": {
              "id": 2,
              "type": "character varying(28)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_id": {
              "id": 4,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": true
            },
            "email": {
              "id": 5,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "third_party_user_id": {
              "id": 3,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "time_joined": {
              "id": 6,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4779028,
          "primary": [
            "app_id",
            "user_id"
          ],
          "unique": [
            "app_id",
            "user_id",
            "app_id",
            "user_id"
          ],
          "relations": {
            "app_id": "auth.su_app_id_to_user_id.app_id",
            "user_id": "auth.su_app_id_to_user_id.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_thirdparty_users_pkey": [
              "app_id",
              "user_id"
            ]
          },
          "notnulls": [
            "app_id",
            "third_party_id",
            "user_id",
            "email",
            "third_party_user_id",
            "time_joined"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "third_party_id",
            "3": "third_party_user_id",
            "4": "user_id",
            "5": "email",
            "6": "time_joined"
          },
          "rels": {
            "auth.su_thirdparty_users.app_id-auth.su_app_id_to_user_id.app_id": "M-1",
            "auth.su_thirdparty_users.user_id-auth.su_app_id_to_user_id.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_thirdparty_users.app_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_app_id"
            },
            "auth.su_thirdparty_users.user_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_user_id"
            }
          }
        }
      },
      "su_emailverification_tokens": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_emailverification_tokens",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": false
            },
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": true
            },
            "user_id": {
              "id": 3,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "email": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "token": {
              "id": 5,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "token_expiry": {
              "id": 6,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4779010,
          "primary": [
            "app_id",
            "tenant_id",
            "user_id",
            "email",
            "token"
          ],
          "unique": [
            "app_id",
            "tenant_id",
            "user_id",
            "email",
            "token",
            "token",
            "token",
            "app_id",
            "tenant_id",
            "token"
          ],
          "relations": {
            "tenant_id": "auth.su_tenants.app_id",
            "app_id": "auth.su_tenants.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_emailverification_tokens_pkey": [
              "app_id",
              "tenant_id",
              "user_id",
              "email",
              "token"
            ],
            "su_emailverification_tokens_token_key": [
              "token"
            ]
          },
          "notnulls": [
            "app_id",
            "tenant_id",
            "user_id",
            "email",
            "token",
            "token_expiry"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "user_id",
            "4": "email",
            "5": "token",
            "6": "token_expiry"
          },
          "rels": {
            "auth.su_emailverification_tokens.tenant_id-auth.su_tenants.app_id": "M-1",
            "auth.su_emailverification_tokens.app_id-auth.su_tenants.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_emailverification_tokens.tenant_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_tenant_id"
            },
            "auth.su_emailverification_tokens.app_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_app_id"
            }
          }
        }
      },
      "su_emailverification_verified_emails": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_emailverification_verified_emails",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_apps.app_id",
              "unique": false
            },
            "email": {
              "id": 3,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "user_id": {
              "id": 2,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4778998,
          "primary": [
            "app_id",
            "email",
            "user_id"
          ],
          "unique": [
            "app_id",
            "app_id",
            "email",
            "user_id"
          ],
          "relations": {
            "app_id": "auth.su_apps.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_emailverification_verified_emails_pkey": [
              "app_id",
              "email",
              "user_id"
            ]
          },
          "notnulls": [
            "app_id",
            "email",
            "user_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "user_id",
            "3": "email"
          },
          "rels": {
            "auth.su_emailverification_verified_emails.app_id-auth.su_apps.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_emailverification_verified_emails.app_id-auth.su_apps.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_by_app_id"
            }
          }
        }
      },
      "su_emailpassword_pswd_reset_tokens": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_emailpassword_pswd_reset_tokens",
          "columns": {
            "email": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_id": {
              "id": 2,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": true
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": true
            },
            "token_expiry": {
              "id": 5,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "token": {
              "id": 3,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4778983,
          "primary": [
            "user_id",
            "app_id",
            "token"
          ],
          "unique": [
            "app_id",
            "user_id",
            "token",
            "app_id",
            "user_id",
            "token",
            "token",
            "token"
          ],
          "relations": {
            "user_id": "auth.su_app_id_to_user_id.app_id",
            "app_id": "auth.su_app_id_to_user_id.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_emailpassword_pswd_reset_tokens_pkey": [
              "app_id",
              "user_id",
              "token"
            ],
            "su_emailpassword_pswd_reset_tokens_token_key": [
              "token"
            ]
          },
          "notnulls": [
            "user_id",
            "app_id",
            "token_expiry",
            "token"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "user_id",
            "3": "token",
            "4": "email",
            "5": "token_expiry"
          },
          "rels": {
            "auth.su_emailpassword_pswd_reset_tokens.user_id-auth.su_app_id_to_user_id.app_id": "M-1",
            "auth.su_emailpassword_pswd_reset_tokens.app_id-auth.su_app_id_to_user_id.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_emailpassword_pswd_reset_tokens.user_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_user_id"
            },
            "auth.su_emailpassword_pswd_reset_tokens.app_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_app_id"
            }
          }
        }
      },
      "su_emailpassword_user_to_tenant": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_emailpassword_user_to_tenant",
          "columns": {
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": true
            },
            "user_id": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": true
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_all_auth_recipe_users.app_id",
              "unique": true
            },
            "email": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4778968,
          "primary": [
            "tenant_id",
            "app_id",
            "user_id"
          ],
          "unique": [
            "tenant_id",
            "user_id",
            "tenant_id",
            "app_id",
            "user_id",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "email",
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "email",
            "app_id",
            "tenant_id",
            "app_id"
          ],
          "relations": {
            "user_id": "auth.su_all_auth_recipe_users.app_id",
            "tenant_id": "auth.su_all_auth_recipe_users.app_id",
            "app_id": "auth.su_all_auth_recipe_users.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_emailpassword_user_to_tenant_email_key": [
              "tenant_id",
              "app_id",
              "email"
            ],
            "su_emailpassword_user_to_tenant_pkey": [
              "user_id",
              "app_id",
              "tenant_id"
            ]
          },
          "notnulls": [
            "tenant_id",
            "user_id",
            "app_id",
            "email"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "user_id",
            "4": "email"
          },
          "rels": {
            "auth.su_emailpassword_user_to_tenant.user_id-auth.su_all_auth_recipe_users.app_id": "M-1",
            "auth.su_emailpassword_user_to_tenant.tenant_id-auth.su_all_auth_recipe_users.app_id": "M-1",
            "auth.su_emailpassword_user_to_tenant.app_id-auth.su_all_auth_recipe_users.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_emailpassword_user_to_tenant.user_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_user_id"
            },
            "auth.su_emailpassword_user_to_tenant.tenant_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_tenant_id"
            },
            "auth.su_emailpassword_user_to_tenant.app_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_all_auth_recipe_user_by_app_id"
            }
          }
        }
      },
      "su_emailpassword_users": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_emailpassword_users",
          "columns": {
            "password_hash": {
              "id": 4,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": false
            },
            "user_id": {
              "id": 2,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": true
            },
            "email": {
              "id": 3,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "time_joined": {
              "id": 5,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4778954,
          "primary": [
            "app_id",
            "user_id"
          ],
          "unique": [
            "user_id",
            "app_id",
            "user_id",
            "app_id"
          ],
          "relations": {
            "user_id": "auth.su_app_id_to_user_id.app_id",
            "app_id": "auth.su_app_id_to_user_id.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_emailpassword_users_pkey": [
              "user_id",
              "app_id"
            ]
          },
          "notnulls": [
            "password_hash",
            "app_id",
            "user_id",
            "email",
            "time_joined"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "user_id",
            "3": "email",
            "4": "password_hash",
            "5": "time_joined"
          },
          "rels": {
            "auth.su_emailpassword_users.user_id-auth.su_app_id_to_user_id.app_id": "M-1",
            "auth.su_emailpassword_users.app_id-auth.su_app_id_to_user_id.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_emailpassword_users.user_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_user_id"
            },
            "auth.su_emailpassword_users.app_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_app_id"
            }
          }
        }
      },
      "su_tenant_thirdparty_provider_clients": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_tenant_thirdparty_provider_clients",
          "columns": {
            "tenant_id": {
              "id": 3,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_tenant_thirdparty_providers.connection_uri_domain",
              "unique": true
            },
            "third_party_id": {
              "id": 4,
              "type": "character varying(28)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_tenant_thirdparty_providers.connection_uri_domain",
              "unique": true
            },
            "connection_uri_domain": {
              "id": 1,
              "type": "character varying(256)",
              "default": "''::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenant_thirdparty_providers.connection_uri_domain",
              "unique": true
            },
            "app_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_tenant_thirdparty_providers.connection_uri_domain",
              "unique": true
            },
            "additional_config": {
              "id": 10,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "force_pkce": {
              "id": 9,
              "type": "boolean",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "scope": {
              "id": 8,
              "type": "character varying(128)[]",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "client_secret": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "client_id": {
              "id": 6,
              "type": "character varying(256)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "client_type": {
              "id": 5,
              "type": "character varying(64)",
              "default": "''::character varying",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4778937,
          "primary": [
            "connection_uri_domain",
            "app_id",
            "tenant_id",
            "third_party_id",
            "client_type"
          ],
          "unique": [
            "connection_uri_domain",
            "third_party_id",
            "client_type",
            "tenant_id",
            "third_party_id",
            "app_id",
            "connection_uri_domain",
            "app_id",
            "tenant_id"
          ],
          "relations": {
            "tenant_id": "auth.su_tenant_thirdparty_providers.connection_uri_domain",
            "third_party_id": "auth.su_tenant_thirdparty_providers.connection_uri_domain",
            "app_id": "auth.su_tenant_thirdparty_providers.connection_uri_domain",
            "connection_uri_domain": "auth.su_tenant_thirdparty_providers.connection_uri_domain"
          },
          "referencedBy": {},
          "uindex": {
            "su_tenant_thirdparty_provider_clients_pkey": [
              "connection_uri_domain",
              "third_party_id",
              "client_type",
              "tenant_id",
              "app_id"
            ]
          },
          "notnulls": [
            "tenant_id",
            "third_party_id",
            "connection_uri_domain",
            "app_id",
            "client_id",
            "client_type"
          ],
          "serials": [],
          "idToName": {
            "1": "connection_uri_domain",
            "2": "app_id",
            "3": "tenant_id",
            "4": "third_party_id",
            "5": "client_type",
            "6": "client_id",
            "7": "client_secret",
            "8": "scope",
            "9": "force_pkce",
            "10": "additional_config"
          },
          "rels": {
            "auth.su_tenant_thirdparty_provider_clients.tenant_id-auth.su_tenant_thirdparty_providers.connection_uri_domain": "M-1",
            "auth.su_tenant_thirdparty_provider_clients.third_party_id-auth.su_tenant_thirdparty_providers.connection_uri_domain": "M-1",
            "auth.su_tenant_thirdparty_provider_clients.app_id-auth.su_tenant_thirdparty_providers.connection_uri_domain": "M-1",
            "auth.su_tenant_thirdparty_provider_clients.connection_uri_domain-auth.su_tenant_thirdparty_providers.connection_uri_domain": "M-1"
          },
          "rels_new": {
            "auth.su_tenant_thirdparty_provider_clients.tenant_id-auth.su_tenant_thirdparty_providers.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_thirdparty_provider_by_tenant_id"
            },
            "auth.su_tenant_thirdparty_provider_clients.third_party_id-auth.su_tenant_thirdparty_providers.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_thirdparty_provider_by_third_party_id"
            },
            "auth.su_tenant_thirdparty_provider_clients.app_id-auth.su_tenant_thirdparty_providers.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_thirdparty_provider_by_app_id"
            },
            "auth.su_tenant_thirdparty_provider_clients.connection_uri_domain-auth.su_tenant_thirdparty_providers.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_thirdparty_provider_by_connection_uri_domain"
            }
          }
        }
      },
      "su_tenant_required_secondary_factors": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_tenant_required_secondary_factors",
          "columns": {
            "connection_uri_domain": {
              "id": 1,
              "type": "character varying(256)",
              "default": "''::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenant_configs.connection_uri_domain",
              "unique": true
            },
            "factor_id": {
              "id": 4,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "tenant_id": {
              "id": 3,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenant_configs.connection_uri_domain",
              "unique": true
            },
            "app_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenant_configs.connection_uri_domain",
              "unique": true
            }
          },
          "id": 4778921,
          "primary": [
            "factor_id",
            "tenant_id",
            "app_id",
            "connection_uri_domain"
          ],
          "unique": [
            "factor_id",
            "tenant_id",
            "app_id",
            "connection_uri_domain",
            "tenant_id",
            "app_id",
            "connection_uri_domain"
          ],
          "relations": {
            "connection_uri_domain": "auth.su_tenant_configs.connection_uri_domain",
            "tenant_id": "auth.su_tenant_configs.connection_uri_domain",
            "app_id": "auth.su_tenant_configs.connection_uri_domain"
          },
          "referencedBy": {},
          "uindex": {
            "su_tenant_required_secondary_factors_pkey": [
              "factor_id",
              "tenant_id",
              "app_id",
              "connection_uri_domain"
            ]
          },
          "notnulls": [
            "connection_uri_domain",
            "factor_id",
            "tenant_id",
            "app_id"
          ],
          "serials": [],
          "idToName": {
            "1": "connection_uri_domain",
            "2": "app_id",
            "3": "tenant_id",
            "4": "factor_id"
          },
          "rels": {
            "auth.su_tenant_required_secondary_factors.connection_uri_domain-auth.su_tenant_configs.connection_uri_domain": "M-1",
            "auth.su_tenant_required_secondary_factors.tenant_id-auth.su_tenant_configs.connection_uri_domain": "M-1",
            "auth.su_tenant_required_secondary_factors.app_id-auth.su_tenant_configs.connection_uri_domain": "M-1"
          },
          "rels_new": {
            "auth.su_tenant_required_secondary_factors.connection_uri_domain-auth.su_tenant_configs.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_config_by_connection_uri_domain"
            },
            "auth.su_tenant_required_secondary_factors.tenant_id-auth.su_tenant_configs.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_config_by_tenant_id"
            },
            "auth.su_tenant_required_secondary_factors.app_id-auth.su_tenant_configs.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_config_by_app_id"
            }
          }
        }
      },
      "su_tenant_first_factors": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_tenant_first_factors",
          "columns": {
            "tenant_id": {
              "id": 3,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_tenant_configs.connection_uri_domain",
              "unique": false
            },
            "connection_uri_domain": {
              "id": 1,
              "type": "character varying(256)",
              "default": "''::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_tenant_configs.connection_uri_domain",
              "unique": false
            },
            "app_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenant_configs.connection_uri_domain",
              "unique": true
            },
            "factor_id": {
              "id": 4,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4778905,
          "primary": [
            "connection_uri_domain",
            "app_id",
            "tenant_id",
            "factor_id"
          ],
          "unique": [
            "tenant_id",
            "connection_uri_domain",
            "app_id",
            "tenant_id",
            "factor_id",
            "connection_uri_domain",
            "app_id"
          ],
          "relations": {
            "tenant_id": "auth.su_tenant_configs.connection_uri_domain",
            "connection_uri_domain": "auth.su_tenant_configs.connection_uri_domain",
            "app_id": "auth.su_tenant_configs.connection_uri_domain"
          },
          "referencedBy": {},
          "uindex": {
            "su_tenant_first_factors_pkey": [
              "tenant_id",
              "connection_uri_domain",
              "app_id",
              "factor_id"
            ]
          },
          "notnulls": [
            "tenant_id",
            "connection_uri_domain",
            "app_id",
            "factor_id"
          ],
          "serials": [],
          "idToName": {
            "1": "connection_uri_domain",
            "2": "app_id",
            "3": "tenant_id",
            "4": "factor_id"
          },
          "rels": {
            "auth.su_tenant_first_factors.tenant_id-auth.su_tenant_configs.connection_uri_domain": "M-1",
            "auth.su_tenant_first_factors.connection_uri_domain-auth.su_tenant_configs.connection_uri_domain": "M-1",
            "auth.su_tenant_first_factors.app_id-auth.su_tenant_configs.connection_uri_domain": "M-1"
          },
          "rels_new": {
            "auth.su_tenant_first_factors.tenant_id-auth.su_tenant_configs.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_config_by_tenant_id"
            },
            "auth.su_tenant_first_factors.connection_uri_domain-auth.su_tenant_configs.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_config_by_connection_uri_domain"
            },
            "auth.su_tenant_first_factors.app_id-auth.su_tenant_configs.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_config_by_app_id"
            }
          }
        }
      },
      "su_tenant_thirdparty_providers": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_tenant_thirdparty_providers",
          "columns": {
            "tenant_id": {
              "id": 3,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenant_configs.connection_uri_domain",
              "unique": false
            },
            "name": {
              "id": 5,
              "type": "character varying(64)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "authorization_endpoint": {
              "id": 6,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "authorization_endpoint_query_params": {
              "id": 7,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "token_endpoint": {
              "id": 8,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "token_endpoint_body_params": {
              "id": 9,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_info_endpoint": {
              "id": 10,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_info_endpoint_query_params": {
              "id": 11,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_info_endpoint_headers": {
              "id": 12,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "jwks_uri": {
              "id": 13,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "oidc_discovery_endpoint": {
              "id": 14,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "require_email": {
              "id": 15,
              "type": "boolean",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_info_map_from_id_token_payload_user_id": {
              "id": 16,
              "type": "character varying(64)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_info_map_from_id_token_payload_email": {
              "id": 17,
              "type": "character varying(64)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_info_map_from_id_token_payload_email_verified": {
              "id": 18,
              "type": "character varying(64)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_info_map_from_user_info_endpoint_user_id": {
              "id": 19,
              "type": "character varying(64)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_info_map_from_user_info_endpoint_email": {
              "id": 20,
              "type": "character varying(64)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_info_map_from_user_info_endpoint_email_verified": {
              "id": 21,
              "type": "character varying(64)",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "connection_uri_domain": {
              "id": 1,
              "type": "character varying(256)",
              "default": "''::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenant_configs.connection_uri_domain",
              "unique": false
            },
            "app_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenant_configs.connection_uri_domain",
              "unique": false
            },
            "third_party_id": {
              "id": 4,
              "type": "character varying(28)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4778889,
          "primary": [
            "tenant_id",
            "connection_uri_domain",
            "app_id",
            "third_party_id"
          ],
          "unique": [
            "tenant_id",
            "connection_uri_domain",
            "app_id",
            "tenant_id",
            "connection_uri_domain",
            "app_id",
            "third_party_id"
          ],
          "relations": {
            "connection_uri_domain": "auth.su_tenant_configs.connection_uri_domain",
            "app_id": "auth.su_tenant_configs.connection_uri_domain",
            "tenant_id": "auth.su_tenant_configs.connection_uri_domain"
          },
          "referencedBy": {
            "connection_uri_domain": [
              "auth.su_tenant_thirdparty_provider_clients.tenant_id",
              "auth.su_tenant_thirdparty_provider_clients.third_party_id",
              "auth.su_tenant_thirdparty_provider_clients.app_id",
              "auth.su_tenant_thirdparty_provider_clients.connection_uri_domain"
            ]
          },
          "uindex": {
            "su_tenant_thirdparty_providers_pkey": [
              "tenant_id",
              "connection_uri_domain",
              "app_id",
              "third_party_id"
            ]
          },
          "notnulls": [
            "tenant_id",
            "connection_uri_domain",
            "app_id",
            "third_party_id"
          ],
          "serials": [],
          "idToName": {
            "1": "connection_uri_domain",
            "2": "app_id",
            "3": "tenant_id",
            "4": "third_party_id",
            "5": "name",
            "6": "authorization_endpoint",
            "7": "authorization_endpoint_query_params",
            "8": "token_endpoint",
            "9": "token_endpoint_body_params",
            "10": "user_info_endpoint",
            "11": "user_info_endpoint_query_params",
            "12": "user_info_endpoint_headers",
            "13": "jwks_uri",
            "14": "oidc_discovery_endpoint",
            "15": "require_email",
            "16": "user_info_map_from_id_token_payload_user_id",
            "17": "user_info_map_from_id_token_payload_email",
            "18": "user_info_map_from_id_token_payload_email_verified",
            "19": "user_info_map_from_user_info_endpoint_user_id",
            "20": "user_info_map_from_user_info_endpoint_email",
            "21": "user_info_map_from_user_info_endpoint_email_verified"
          },
          "rels": {
            "auth.su_tenant_thirdparty_providers.connection_uri_domain-auth.su_tenant_thirdparty_provider_clients.tenant_id": "1-M",
            "auth.su_tenant_thirdparty_providers.connection_uri_domain-auth.su_tenant_thirdparty_provider_clients.third_party_id": "1-M",
            "auth.su_tenant_thirdparty_providers.connection_uri_domain-auth.su_tenant_thirdparty_provider_clients.app_id": "1-M",
            "auth.su_tenant_thirdparty_providers.connection_uri_domain-auth.su_tenant_thirdparty_provider_clients.connection_uri_domain": "1-M",
            "auth.su_tenant_thirdparty_providers.connection_uri_domain-auth.su_tenant_configs.connection_uri_domain": "M-1",
            "auth.su_tenant_thirdparty_providers.app_id-auth.su_tenant_configs.connection_uri_domain": "M-1",
            "auth.su_tenant_thirdparty_providers.tenant_id-auth.su_tenant_configs.connection_uri_domain": "M-1"
          },
          "rels_new": {
            "auth.su_tenant_thirdparty_providers.connection_uri_domain-auth.su_tenant_thirdparty_provider_clients.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_thirdparty_provider_clients_by_tenant_id"
            },
            "auth.su_tenant_thirdparty_providers.connection_uri_domain-auth.su_tenant_thirdparty_provider_clients.third_party_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_thirdparty_provider_clients_by_third_party_id"
            },
            "auth.su_tenant_thirdparty_providers.connection_uri_domain-auth.su_tenant_thirdparty_provider_clients.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_thirdparty_provider_clients_by_app_id"
            },
            "auth.su_tenant_thirdparty_providers.connection_uri_domain-auth.su_tenant_thirdparty_provider_clients.connection_uri_domain": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_thirdparty_provider_clients_by_connection_uri_domain"
            },
            "auth.su_tenant_thirdparty_providers.connection_uri_domain-auth.su_tenant_configs.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_config_by_connection_uri_domain"
            },
            "auth.su_tenant_thirdparty_providers.app_id-auth.su_tenant_configs.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_config_by_app_id"
            },
            "auth.su_tenant_thirdparty_providers.tenant_id-auth.su_tenant_configs.connection_uri_domain": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_config_by_tenant_id"
            }
          }
        }
      },
      "su_tenant_configs": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_tenant_configs",
          "columns": {
            "core_config": {
              "id": 4,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "email_password_enabled": {
              "id": 5,
              "type": "boolean",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "tenant_id": {
              "id": 3,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "app_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "passwordless_enabled": {
              "id": 6,
              "type": "boolean",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "third_party_enabled": {
              "id": 7,
              "type": "boolean",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "is_first_factors_null": {
              "id": 8,
              "type": "boolean",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "connection_uri_domain": {
              "id": 1,
              "type": "character varying(256)",
              "default": "''::character varying",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4778879,
          "primary": [
            "tenant_id",
            "app_id",
            "connection_uri_domain"
          ],
          "unique": [
            "tenant_id",
            "app_id",
            "connection_uri_domain"
          ],
          "relations": {},
          "referencedBy": {
            "connection_uri_domain": [
              "auth.su_tenant_required_secondary_factors.connection_uri_domain",
              "auth.su_tenant_required_secondary_factors.tenant_id",
              "auth.su_tenant_required_secondary_factors.app_id",
              "auth.su_tenant_first_factors.tenant_id",
              "auth.su_tenant_first_factors.connection_uri_domain",
              "auth.su_tenant_first_factors.app_id",
              "auth.su_tenant_thirdparty_providers.connection_uri_domain",
              "auth.su_tenant_thirdparty_providers.app_id",
              "auth.su_tenant_thirdparty_providers.tenant_id"
            ]
          },
          "uindex": {
            "su_tenant_configs_pkey": [
              "tenant_id",
              "app_id",
              "connection_uri_domain"
            ]
          },
          "notnulls": [
            "tenant_id",
            "app_id",
            "connection_uri_domain"
          ],
          "serials": [],
          "idToName": {
            "1": "connection_uri_domain",
            "2": "app_id",
            "3": "tenant_id",
            "4": "core_config",
            "5": "email_password_enabled",
            "6": "passwordless_enabled",
            "7": "third_party_enabled",
            "8": "is_first_factors_null"
          },
          "rels": {
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_required_secondary_factors.connection_uri_domain": "1-M",
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_required_secondary_factors.tenant_id": "1-M",
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_required_secondary_factors.app_id": "1-M",
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_first_factors.tenant_id": "1-M",
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_first_factors.connection_uri_domain": "1-M",
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_first_factors.app_id": "1-M",
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_thirdparty_providers.connection_uri_domain": "1-M",
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_thirdparty_providers.app_id": "1-M",
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_thirdparty_providers.tenant_id": "1-M"
          },
          "rels_new": {
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_required_secondary_factors.connection_uri_domain": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_required_secondary_factors_by_connection_uri_domain"
            },
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_required_secondary_factors.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_required_secondary_factors_by_tenant_id"
            },
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_required_secondary_factors.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_required_secondary_factors_by_app_id"
            },
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_first_factors.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_first_factors_by_tenant_id"
            },
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_first_factors.connection_uri_domain": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_first_factors_by_connection_uri_domain"
            },
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_first_factors.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_first_factors_by_app_id"
            },
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_thirdparty_providers.connection_uri_domain": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_thirdparty_providers_by_connection_uri_domain"
            },
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_thirdparty_providers.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_thirdparty_providers_by_app_id"
            },
            "auth.su_tenant_configs.connection_uri_domain-auth.su_tenant_thirdparty_providers.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenant_thirdparty_providers_by_tenant_id"
            }
          }
        }
      },
      "su_session_info": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_session_info",
          "columns": {
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": true
            },
            "expires_at": {
              "id": 7,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "use_static_key": {
              "id": 10,
              "type": "boolean",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": true
            },
            "user_id": {
              "id": 4,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "refresh_token_hash_2": {
              "id": 5,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "session_data": {
              "id": 6,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at_time": {
              "id": 8,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "session_handle": {
              "id": 3,
              "type": "character varying(255)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "jwt_user_payload": {
              "id": 9,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4778862,
          "primary": [
            "app_id",
            "tenant_id",
            "session_handle"
          ],
          "unique": [
            "tenant_id",
            "app_id",
            "tenant_id",
            "app_id",
            "session_handle"
          ],
          "relations": {
            "tenant_id": "auth.su_tenants.app_id",
            "app_id": "auth.su_tenants.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_session_info_pkey": [
              "tenant_id",
              "app_id",
              "session_handle"
            ]
          },
          "notnulls": [
            "tenant_id",
            "expires_at",
            "use_static_key",
            "app_id",
            "user_id",
            "refresh_token_hash_2",
            "created_at_time",
            "session_handle"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "session_handle",
            "4": "user_id",
            "5": "refresh_token_hash_2",
            "6": "session_data",
            "7": "expires_at",
            "8": "created_at_time",
            "9": "jwt_user_payload",
            "10": "use_static_key"
          },
          "rels": {
            "auth.su_session_info.tenant_id-auth.su_tenants.app_id": "M-1",
            "auth.su_session_info.app_id-auth.su_tenants.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_session_info.tenant_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_tenant_id"
            },
            "auth.su_session_info.app_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_app_id"
            }
          }
        }
      },
      "su_session_access_token_signing_keys": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_session_access_token_signing_keys",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_apps.app_id",
              "unique": true
            },
            "created_at_time": {
              "id": 2,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "value": {
              "id": 3,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4778848,
          "primary": [
            "app_id",
            "created_at_time"
          ],
          "unique": [
            "app_id",
            "created_at_time",
            "app_id"
          ],
          "relations": {
            "app_id": "auth.su_apps.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_session_access_token_signing_keys_pkey": [
              "app_id",
              "created_at_time"
            ]
          },
          "notnulls": [
            "app_id",
            "created_at_time"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "created_at_time",
            "3": "value"
          },
          "rels": {
            "auth.su_session_access_token_signing_keys.app_id-auth.su_apps.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_session_access_token_signing_keys.app_id-auth.su_apps.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_by_app_id"
            }
          }
        }
      },
      "su_user_last_active": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_user_last_active",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": true,
              "fk_col": "auth.su_apps.app_id",
              "unique": false
            },
            "user_id": {
              "id": 2,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "last_active_time": {
              "id": 3,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4778835,
          "primary": [
            "app_id",
            "user_id"
          ],
          "unique": [
            "app_id",
            "app_id",
            "user_id"
          ],
          "relations": {
            "app_id": "auth.su_apps.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_user_last_active_pkey": [
              "app_id",
              "user_id"
            ]
          },
          "notnulls": [
            "app_id",
            "user_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "user_id",
            "3": "last_active_time"
          },
          "rels": {
            "auth.su_user_last_active.app_id-auth.su_apps.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_user_last_active.app_id-auth.su_apps.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_by_app_id"
            }
          }
        }
      },
      "su_all_auth_recipe_users": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_all_auth_recipe_users",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": true
            },
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": true
            },
            "recipe_id": {
              "id": 6,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "primary_or_recipe_user_id": {
              "id": 4,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": false
            },
            "primary_or_recipe_user_time_joined": {
              "id": 8,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "user_id": {
              "id": 3,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": true
            },
            "is_linked_or_is_a_primary_user": {
              "id": 5,
              "type": "boolean",
              "default": "false",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "time_joined": {
              "id": 7,
              "type": "bigint",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4778806,
          "primary": [
            "tenant_id",
            "app_id",
            "user_id"
          ],
          "unique": [
            "app_id",
            "user_id",
            "tenant_id",
            "app_id",
            "app_id",
            "tenant_id",
            "app_id",
            "user_id"
          ],
          "relations": {
            "app_id": "auth.su_tenants.app_id",
            "tenant_id": "auth.su_tenants.app_id",
            "primary_or_recipe_user_id": "auth.su_app_id_to_user_id.app_id",
            "user_id": "auth.su_app_id_to_user_id.app_id"
          },
          "referencedBy": {
            "app_id": [
              "auth.su_webauthn_account_recovery_tokens.tenant_id",
              "auth.su_webauthn_account_recovery_tokens.app_id",
              "auth.su_webauthn_account_recovery_tokens.user_id",
              "auth.su_webauthn_user_to_tenant.app_id",
              "auth.su_webauthn_user_to_tenant.tenant_id",
              "auth.su_webauthn_user_to_tenant.user_id",
              "auth.su_passwordless_user_to_tenant.user_id",
              "auth.su_passwordless_user_to_tenant.tenant_id",
              "auth.su_passwordless_user_to_tenant.app_id",
              "auth.su_thirdparty_user_to_tenant.user_id",
              "auth.su_thirdparty_user_to_tenant.tenant_id",
              "auth.su_thirdparty_user_to_tenant.app_id",
              "auth.su_emailpassword_user_to_tenant.user_id",
              "auth.su_emailpassword_user_to_tenant.tenant_id",
              "auth.su_emailpassword_user_to_tenant.app_id"
            ]
          },
          "uindex": {
            "su_all_auth_recipe_users_pkey": [
              "app_id",
              "user_id",
              "tenant_id"
            ]
          },
          "notnulls": [
            "app_id",
            "tenant_id",
            "recipe_id",
            "primary_or_recipe_user_id",
            "primary_or_recipe_user_time_joined",
            "user_id",
            "is_linked_or_is_a_primary_user",
            "time_joined"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "user_id",
            "4": "primary_or_recipe_user_id",
            "5": "is_linked_or_is_a_primary_user",
            "6": "recipe_id",
            "7": "time_joined",
            "8": "primary_or_recipe_user_time_joined"
          },
          "rels": {
            "auth.su_all_auth_recipe_users.app_id-auth.su_webauthn_account_recovery_tokens.tenant_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_webauthn_account_recovery_tokens.app_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_webauthn_account_recovery_tokens.user_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_webauthn_user_to_tenant.app_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_webauthn_user_to_tenant.tenant_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_webauthn_user_to_tenant.user_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_passwordless_user_to_tenant.user_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_passwordless_user_to_tenant.tenant_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_passwordless_user_to_tenant.app_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_thirdparty_user_to_tenant.user_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_thirdparty_user_to_tenant.tenant_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_thirdparty_user_to_tenant.app_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_emailpassword_user_to_tenant.user_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_emailpassword_user_to_tenant.tenant_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_emailpassword_user_to_tenant.app_id": "1-M",
            "auth.su_all_auth_recipe_users.app_id-auth.su_app_id_to_user_id.app_id": "M-1",
            "auth.su_all_auth_recipe_users.tenant_id-auth.su_tenants.app_id": "M-1",
            "auth.su_all_auth_recipe_users.app_id-auth.su_tenants.app_id": "M-1",
            "auth.su_all_auth_recipe_users.primary_or_recipe_user_id-auth.su_app_id_to_user_id.app_id": "M-1",
            "auth.su_all_auth_recipe_users.user_id-auth.su_app_id_to_user_id.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_all_auth_recipe_users.app_id-auth.su_webauthn_account_recovery_tokens.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_webauthn_account_recovery_tokens_by_tenant_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_webauthn_account_recovery_tokens.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_webauthn_account_recovery_tokens_by_app_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_webauthn_account_recovery_tokens.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_webauthn_account_recovery_tokens_by_user_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_webauthn_user_to_tenant.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_webauthn_user_to_tenants_by_app_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_webauthn_user_to_tenant.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_webauthn_user_to_tenants_by_tenant_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_webauthn_user_to_tenant.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_webauthn_user_to_tenants_by_user_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_passwordless_user_to_tenant.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_passwordless_user_to_tenants_by_user_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_passwordless_user_to_tenant.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_passwordless_user_to_tenants_by_tenant_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_passwordless_user_to_tenant.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_passwordless_user_to_tenants_by_app_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_thirdparty_user_to_tenant.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_thirdparty_user_to_tenants_by_user_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_thirdparty_user_to_tenant.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_thirdparty_user_to_tenants_by_tenant_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_thirdparty_user_to_tenant.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_thirdparty_user_to_tenants_by_app_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_emailpassword_user_to_tenant.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_emailpassword_user_to_tenants_by_user_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_emailpassword_user_to_tenant.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_emailpassword_user_to_tenants_by_tenant_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_emailpassword_user_to_tenant.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_emailpassword_user_to_tenants_by_app_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_app_id"
            },
            "auth.su_all_auth_recipe_users.tenant_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_tenant_id"
            },
            "auth.su_all_auth_recipe_users.app_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_app_id"
            },
            "auth.su_all_auth_recipe_users.primary_or_recipe_user_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_primary_or_recipe_user_id"
            },
            "auth.su_all_auth_recipe_users.user_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_user_id"
            }
          }
        }
      },
      "su_app_id_to_user_id": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_app_id_to_user_id",
          "columns": {
            "user_id": {
              "id": 2,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": false
            },
            "primary_or_recipe_user_id": {
              "id": 4,
              "type": "character(36)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_app_id_to_user_id.app_id",
              "unique": false
            },
            "recipe_id": {
              "id": 3,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "is_linked_or_is_a_primary_user": {
              "id": 5,
              "type": "boolean",
              "default": "false",
              "not_null": true,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4778786,
          "primary": [
            "app_id",
            "user_id"
          ],
          "unique": [
            "user_id",
            "app_id",
            "app_id",
            "app_id",
            "user_id",
            "user_id",
            "user_id",
            "user_id"
          ],
          "relations": {
            "app_id": "auth.su_app_id_to_user_id.app_id",
            "primary_or_recipe_user_id": "auth.su_app_id_to_user_id.app_id"
          },
          "referencedBy": {
            "user_id": [
              "public.user_exports.user_id",
              "public.subscriptions.user_id",
              "public.unlocked_contacts.created_by",
              "public.organization_invitations.invited_by",
              "public.organization_invitations.accepted_by",
              "public.organization_members.user_id",
              "public.organization_members.invited_by",
              "public.organizations.created_by",
              "public.user_meta.user_id",
              "public.api_logs.user_id",
              "public.lists.created_by",
              "public.llm_chat.created_by",
              "public.user_preferences.user_id",
              "public.saved_searches.created_by"
            ],
            "app_id": [
              "auth.su_webauthn_users.user_id",
              "auth.su_webauthn_users.app_id",
              "auth.su_userid_mapping.app_id",
              "auth.su_userid_mapping.supertokens_user_id",
              "auth.su_passwordless_users.user_id",
              "auth.su_passwordless_users.app_id",
              "auth.su_thirdparty_users.app_id",
              "auth.su_thirdparty_users.user_id",
              "auth.su_emailpassword_pswd_reset_tokens.user_id",
              "auth.su_emailpassword_pswd_reset_tokens.app_id",
              "auth.su_emailpassword_users.user_id",
              "auth.su_emailpassword_users.app_id",
              "auth.su_all_auth_recipe_users.app_id",
              "auth.su_all_auth_recipe_users.primary_or_recipe_user_id",
              "auth.su_all_auth_recipe_users.user_id",
              "auth.su_app_id_to_user_id.app_id",
              "auth.su_app_id_to_user_id.primary_or_recipe_user_id"
            ]
          },
          "uindex": {
            "unquie_user_id": [
              "user_id"
            ],
            "su_app_id_to_user_id_pkey": [
              "app_id",
              "user_id"
            ]
          },
          "notnulls": [
            "user_id",
            "app_id",
            "primary_or_recipe_user_id",
            "recipe_id",
            "is_linked_or_is_a_primary_user"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "user_id",
            "3": "recipe_id",
            "4": "primary_or_recipe_user_id",
            "5": "is_linked_or_is_a_primary_user"
          },
          "rels": {
            "auth.su_app_id_to_user_id.user_id-public.user_exports.user_id": "1-M",
            "auth.su_app_id_to_user_id.user_id-public.subscriptions.user_id": "1-M",
            "auth.su_app_id_to_user_id.user_id-public.unlocked_contacts.created_by": "1-M",
            "auth.su_app_id_to_user_id.user_id-public.organization_invitations.invited_by": "1-M",
            "auth.su_app_id_to_user_id.user_id-public.organization_invitations.accepted_by": "1-M",
            "auth.su_app_id_to_user_id.user_id-public.organization_members.user_id": "1-M",
            "auth.su_app_id_to_user_id.user_id-public.organization_members.invited_by": "1-M",
            "auth.su_app_id_to_user_id.user_id-public.organizations.created_by": "1-M",
            "auth.su_app_id_to_user_id.user_id-public.user_meta.user_id": "1-1",
            "auth.su_app_id_to_user_id.user_id-public.api_logs.user_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_webauthn_users.user_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_webauthn_users.app_id": "1-M",
            "auth.su_app_id_to_user_id.user_id-public.lists.created_by": "1-M",
            "auth.su_app_id_to_user_id.user_id-public.llm_chat.created_by": "1-M",
            "auth.su_app_id_to_user_id.user_id-public.user_preferences.user_id": "1-1",
            "auth.su_app_id_to_user_id.user_id-public.saved_searches.created_by": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_userid_mapping.app_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_userid_mapping.supertokens_user_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_passwordless_users.user_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_passwordless_users.app_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_thirdparty_users.app_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_thirdparty_users.user_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_emailpassword_pswd_reset_tokens.user_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_emailpassword_pswd_reset_tokens.app_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_emailpassword_users.user_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_emailpassword_users.app_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_all_auth_recipe_users.app_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_all_auth_recipe_users.primary_or_recipe_user_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_all_auth_recipe_users.user_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_app_id_to_user_id.app_id": "1-M",
            "auth.su_app_id_to_user_id.primary_or_recipe_user_id-auth.su_app_id_to_user_id.app_id": "M-1",
            "auth.su_app_id_to_user_id.app_id-auth.su_app_id_to_user_id.primary_or_recipe_user_id": "1-M",
            "auth.su_app_id_to_user_id.app_id-auth.su_apps.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_app_id_to_user_id.user_id-public.user_exports.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "user_exports"
            },
            "auth.su_app_id_to_user_id.user_id-public.subscriptions.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "subscriptions"
            },
            "auth.su_app_id_to_user_id.user_id-public.unlocked_contacts.created_by": {
              "type": "1-M",
              "direct": "in",
              "alias": "unlocked_contacts"
            },
            "auth.su_app_id_to_user_id.user_id-public.organization_invitations.invited_by": {
              "type": "1-M",
              "direct": "in",
              "alias": "organization_invitations_by_invited_by"
            },
            "auth.su_app_id_to_user_id.user_id-public.organization_invitations.accepted_by": {
              "type": "1-M",
              "direct": "in",
              "alias": "organization_invitations_by_accepted_by"
            },
            "auth.su_app_id_to_user_id.user_id-public.organization_members.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "organization_members_by_user_id"
            },
            "auth.su_app_id_to_user_id.user_id-public.organization_members.invited_by": {
              "type": "1-M",
              "direct": "in",
              "alias": "organization_members_by_invited_by"
            },
            "auth.su_app_id_to_user_id.user_id-public.organizations.created_by": {
              "type": "1-M",
              "direct": "in",
              "alias": "organizations"
            },
            "auth.su_app_id_to_user_id.user_id-public.user_meta.user_id": {
              "type": "1-1",
              "direct": "in",
              "alias": "user_meta"
            },
            "auth.su_app_id_to_user_id.user_id-public.api_logs.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "api_logs"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_webauthn_users.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_webauthn_users_by_user_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_webauthn_users.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_webauthn_users_by_app_id"
            },
            "auth.su_app_id_to_user_id.user_id-public.lists.created_by": {
              "type": "1-M",
              "direct": "in",
              "alias": "lists"
            },
            "auth.su_app_id_to_user_id.user_id-public.llm_chat.created_by": {
              "type": "1-M",
              "direct": "in",
              "alias": "llm_chats"
            },
            "auth.su_app_id_to_user_id.user_id-public.user_preferences.user_id": {
              "type": "1-1",
              "direct": "in",
              "alias": "user_preference"
            },
            "auth.su_app_id_to_user_id.user_id-public.saved_searches.created_by": {
              "type": "1-M",
              "direct": "in",
              "alias": "saved_searches"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_userid_mapping.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_userid_mappings_by_app_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_userid_mapping.supertokens_user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_userid_mappings_by_supertokens_user_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_passwordless_users.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_passwordless_users_by_user_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_passwordless_users.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_passwordless_users_by_app_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_thirdparty_users.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_thirdparty_users_by_app_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_thirdparty_users.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_thirdparty_users_by_user_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_emailpassword_pswd_reset_tokens.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_emailpassword_pswd_reset_tokens_by_user_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_emailpassword_pswd_reset_tokens.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_emailpassword_pswd_reset_tokens_by_app_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_emailpassword_users.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_emailpassword_users_by_user_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_emailpassword_users.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_emailpassword_users_by_app_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_all_auth_recipe_users_by_app_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_all_auth_recipe_users.primary_or_recipe_user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_all_auth_recipe_users_by_primary_or_recipe_user_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_all_auth_recipe_users.user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_all_auth_recipe_users_by_user_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_app_id_to_user_id.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_app_id_to_user_ids_by_app_id"
            },
            "auth.su_app_id_to_user_id.primary_or_recipe_user_id-auth.su_app_id_to_user_id.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_id_to_user_id_by_primary_or_recipe_user_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_app_id_to_user_id.primary_or_recipe_user_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_app_id_to_user_ids_by_primary_or_recipe_user_id"
            },
            "auth.su_app_id_to_user_id.app_id-auth.su_apps.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_by_app_id"
            }
          }
        }
      },
      "su_key_value": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_key_value",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": false
            },
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_tenants.app_id",
              "unique": true
            },
            "name": {
              "id": 3,
              "type": "character varying(128)",
              "default": null,
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "value": {
              "id": 4,
              "type": "text",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "created_at_time": {
              "id": 5,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4778771,
          "primary": [
            "tenant_id",
            "app_id",
            "name"
          ],
          "unique": [
            "app_id",
            "name",
            "tenant_id",
            "app_id",
            "tenant_id"
          ],
          "relations": {
            "app_id": "auth.su_tenants.app_id",
            "tenant_id": "auth.su_tenants.app_id"
          },
          "referencedBy": {},
          "uindex": {
            "su_key_value_pkey": [
              "app_id",
              "name",
              "tenant_id"
            ]
          },
          "notnulls": [
            "app_id",
            "tenant_id",
            "name"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "name",
            "4": "value",
            "5": "created_at_time"
          },
          "rels": {
            "auth.su_key_value.app_id-auth.su_tenants.app_id": "M-1",
            "auth.su_key_value.tenant_id-auth.su_tenants.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_key_value.app_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_app_id"
            },
            "auth.su_key_value.tenant_id-auth.su_tenants.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_tenant_by_tenant_id"
            }
          }
        }
      },
      "su_tenants": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_tenants",
          "columns": {
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": false,
              "foreign": true,
              "fk_col": "auth.su_apps.app_id",
              "unique": false
            },
            "tenant_id": {
              "id": 2,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            },
            "created_at_time": {
              "id": 3,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            }
          },
          "id": 4778758,
          "primary": [
            "app_id",
            "tenant_id"
          ],
          "unique": [
            "tenant_id",
            "app_id",
            "app_id"
          ],
          "relations": {
            "app_id": "auth.su_apps.app_id"
          },
          "referencedBy": {
            "app_id": [
              "auth.su_webauthn_generated_options.app_id",
              "auth.su_webauthn_generated_options.tenant_id",
              "auth.su_totp_used_codes.app_id",
              "auth.su_totp_used_codes.tenant_id",
              "auth.su_user_roles.tenant_id",
              "auth.su_user_roles.app_id",
              "auth.su_passwordless_devices.app_id",
              "auth.su_passwordless_devices.tenant_id",
              "auth.su_emailverification_tokens.tenant_id",
              "auth.su_emailverification_tokens.app_id",
              "auth.su_session_info.tenant_id",
              "auth.su_session_info.app_id",
              "auth.su_all_auth_recipe_users.tenant_id",
              "auth.su_all_auth_recipe_users.app_id",
              "auth.su_key_value.app_id",
              "auth.su_key_value.tenant_id"
            ]
          },
          "uindex": {
            "su_tenants_pkey": [
              "tenant_id",
              "app_id"
            ]
          },
          "notnulls": [
            "app_id",
            "tenant_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "tenant_id",
            "3": "created_at_time"
          },
          "rels": {
            "auth.su_tenants.app_id-auth.su_webauthn_generated_options.app_id": "1-M",
            "auth.su_tenants.app_id-auth.su_webauthn_generated_options.tenant_id": "1-M",
            "auth.su_tenants.app_id-auth.su_totp_used_codes.app_id": "1-M",
            "auth.su_tenants.app_id-auth.su_totp_used_codes.tenant_id": "1-M",
            "auth.su_tenants.app_id-auth.su_user_roles.tenant_id": "1-M",
            "auth.su_tenants.app_id-auth.su_user_roles.app_id": "1-M",
            "auth.su_tenants.app_id-auth.su_passwordless_devices.app_id": "1-M",
            "auth.su_tenants.app_id-auth.su_passwordless_devices.tenant_id": "1-M",
            "auth.su_tenants.app_id-auth.su_emailverification_tokens.tenant_id": "1-M",
            "auth.su_tenants.app_id-auth.su_emailverification_tokens.app_id": "1-M",
            "auth.su_tenants.app_id-auth.su_session_info.tenant_id": "1-M",
            "auth.su_tenants.app_id-auth.su_session_info.app_id": "1-M",
            "auth.su_tenants.app_id-auth.su_all_auth_recipe_users.tenant_id": "1-M",
            "auth.su_tenants.app_id-auth.su_all_auth_recipe_users.app_id": "1-M",
            "auth.su_tenants.app_id-auth.su_key_value.app_id": "1-M",
            "auth.su_tenants.app_id-auth.su_key_value.tenant_id": "1-M",
            "auth.su_tenants.app_id-auth.su_apps.app_id": "M-1"
          },
          "rels_new": {
            "auth.su_tenants.app_id-auth.su_webauthn_generated_options.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_webauthn_generated_options_by_app_id"
            },
            "auth.su_tenants.app_id-auth.su_webauthn_generated_options.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_webauthn_generated_options_by_tenant_id"
            },
            "auth.su_tenants.app_id-auth.su_totp_used_codes.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_totp_used_codes_by_app_id"
            },
            "auth.su_tenants.app_id-auth.su_totp_used_codes.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_totp_used_codes_by_tenant_id"
            },
            "auth.su_tenants.app_id-auth.su_user_roles.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_user_roles_by_tenant_id"
            },
            "auth.su_tenants.app_id-auth.su_user_roles.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_user_roles_by_app_id"
            },
            "auth.su_tenants.app_id-auth.su_passwordless_devices.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_passwordless_devices_by_app_id"
            },
            "auth.su_tenants.app_id-auth.su_passwordless_devices.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_passwordless_devices_by_tenant_id"
            },
            "auth.su_tenants.app_id-auth.su_emailverification_tokens.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_emailverification_tokens_by_tenant_id"
            },
            "auth.su_tenants.app_id-auth.su_emailverification_tokens.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_emailverification_tokens_by_app_id"
            },
            "auth.su_tenants.app_id-auth.su_session_info.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_session_infos_by_tenant_id"
            },
            "auth.su_tenants.app_id-auth.su_session_info.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_session_infos_by_app_id"
            },
            "auth.su_tenants.app_id-auth.su_all_auth_recipe_users.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_all_auth_recipe_users_by_tenant_id"
            },
            "auth.su_tenants.app_id-auth.su_all_auth_recipe_users.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_all_auth_recipe_users_by_app_id"
            },
            "auth.su_tenants.app_id-auth.su_key_value.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_key_values_by_app_id"
            },
            "auth.su_tenants.app_id-auth.su_key_value.tenant_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_key_values_by_tenant_id"
            },
            "auth.su_tenants.app_id-auth.su_apps.app_id": {
              "type": "M-1",
              "direct": "out",
              "alias": "auth_su_app_by_app_id"
            }
          }
        }
      },
      "su_apps": {
        "properties": {
          "schema_name": "auth",
          "table_name": "su_apps",
          "columns": {
            "created_at_time": {
              "id": 2,
              "type": "bigint",
              "default": null,
              "not_null": false,
              "primary": false,
              "foreign": false,
              "fk_col": null,
              "unique": false
            },
            "app_id": {
              "id": 1,
              "type": "character varying(64)",
              "default": "'public'::character varying",
              "not_null": true,
              "primary": true,
              "foreign": false,
              "fk_col": null,
              "unique": true
            }
          },
          "id": 4778752,
          "primary": [
            "app_id"
          ],
          "unique": [
            "app_id"
          ],
          "relations": {},
          "referencedBy": {
            "app_id": [
              "auth.su_oauth_clients.app_id",
              "auth.su_bulk_import_users.app_id",
              "auth.su_totp_users.app_id",
              "auth.su_dashboard_users.app_id",
              "auth.su_roles.app_id",
              "auth.su_user_metadata.app_id",
              "auth.su_jwt_signing_keys.app_id",
              "auth.su_emailverification_verified_emails.app_id",
              "auth.su_session_access_token_signing_keys.app_id",
              "auth.su_user_last_active.app_id",
              "auth.su_app_id_to_user_id.app_id",
              "auth.su_tenants.app_id"
            ]
          },
          "uindex": {
            "su_apps_pkey": [
              "app_id"
            ]
          },
          "notnulls": [
            "app_id"
          ],
          "serials": [],
          "idToName": {
            "1": "app_id",
            "2": "created_at_time"
          },
          "rels": {
            "auth.su_apps.app_id-auth.su_oauth_clients.app_id": "1-M",
            "auth.su_apps.app_id-auth.su_bulk_import_users.app_id": "1-M",
            "auth.su_apps.app_id-auth.su_totp_users.app_id": "1-M",
            "auth.su_apps.app_id-auth.su_dashboard_users.app_id": "1-M",
            "auth.su_apps.app_id-auth.su_roles.app_id": "1-M",
            "auth.su_apps.app_id-auth.su_user_metadata.app_id": "1-M",
            "auth.su_apps.app_id-auth.su_jwt_signing_keys.app_id": "1-M",
            "auth.su_apps.app_id-auth.su_emailverification_verified_emails.app_id": "1-M",
            "auth.su_apps.app_id-auth.su_session_access_token_signing_keys.app_id": "1-M",
            "auth.su_apps.app_id-auth.su_user_last_active.app_id": "1-M",
            "auth.su_apps.app_id-auth.su_app_id_to_user_id.app_id": "1-M",
            "auth.su_apps.app_id-auth.su_tenants.app_id": "1-M"
          },
          "rels_new": {
            "auth.su_apps.app_id-auth.su_oauth_clients.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_oauth_clients"
            },
            "auth.su_apps.app_id-auth.su_bulk_import_users.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_bulk_import_users"
            },
            "auth.su_apps.app_id-auth.su_totp_users.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_totp_users"
            },
            "auth.su_apps.app_id-auth.su_dashboard_users.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_dashboard_users"
            },
            "auth.su_apps.app_id-auth.su_roles.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_roles"
            },
            "auth.su_apps.app_id-auth.su_user_metadata.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_user_metadata"
            },
            "auth.su_apps.app_id-auth.su_jwt_signing_keys.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_jwt_signing_keys"
            },
            "auth.su_apps.app_id-auth.su_emailverification_verified_emails.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_emailverification_verified_emails"
            },
            "auth.su_apps.app_id-auth.su_session_access_token_signing_keys.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_session_access_token_signing_keys"
            },
            "auth.su_apps.app_id-auth.su_user_last_active.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_user_last_actives"
            },
            "auth.su_apps.app_id-auth.su_app_id_to_user_id.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_app_id_to_user_ids"
            },
            "auth.su_apps.app_id-auth.su_tenants.app_id": {
              "type": "1-M",
              "direct": "in",
              "alias": "auth_su_tenants"
            }
          }
        }
      }
    }
  },
  "idToName": {
    "13049489.2": [
      "public",
      "user_exports",
      "export_count"
    ],
    "13049489.1": [
      "public",
      "user_exports",
      "id"
    ],
    "13049489.3": [
      "public",
      "user_exports",
      "user_id"
    ],
    "13049489.4": [
      "public",
      "user_exports",
      "created_at"
    ],
    "13049372.1": [
      "public",
      "agent_prompt",
      "id"
    ],
    "13049372.2": [
      "public",
      "agent_prompt",
      "prompt"
    ],
    "13049372.3": [
      "public",
      "agent_prompt",
      "updated_at"
    ],
    "13049372.4": [
      "public",
      "agent_prompt",
      "server_type"
    ],
    "13049248.4": [
      "public",
      "subscription_invoice",
      "created_at"
    ],
    "13049248.2": [
      "public",
      "subscription_invoice",
      "subscription_id"
    ],
    "13049248.1": [
      "public",
      "subscription_invoice",
      "id"
    ],
    "13049248.3": [
      "public",
      "subscription_invoice",
      "file_path"
    ],
    "13049179.2": [
      "public",
      "people_role_designations",
      "designation_id"
    ],
    "13049179.1": [
      "public",
      "people_role_designations",
      "people_role_id"
    ],
    "13049172.1": [
      "public",
      "designations",
      "rank"
    ],
    "13049172.2": [
      "public",
      "designations",
      "designation_name"
    ],
    "13049162.4": [
      "public",
      "webhook_logs",
      "created_at"
    ],
    "13049162.2": [
      "public",
      "webhook_logs",
      "event_type"
    ],
    "13049162.6": [
      "public",
      "webhook_logs",
      "service"
    ],
    "13049162.1": [
      "public",
      "webhook_logs",
      "id"
    ],
    "13049162.5": [
      "public",
      "webhook_logs",
      "updated_at"
    ],
    "13049162.3": [
      "public",
      "webhook_logs",
      "payload"
    ],
    "13049143.27": [
      "public",
      "subscriptions",
      "links"
    ],
    "13049143.2": [
      "public",
      "subscriptions",
      "paypal_subscription_id"
    ],
    "13049143.1": [
      "public",
      "subscriptions",
      "id"
    ],
    "13049143.3": [
      "public",
      "subscriptions",
      "status"
    ],
    "13049143.4": [
      "public",
      "subscriptions",
      "status_update_time"
    ],
    "13049143.5": [
      "public",
      "subscriptions",
      "plan_id"
    ],
    "13049143.6": [
      "public",
      "subscriptions",
      "start_time"
    ],
    "13049143.7": [
      "public",
      "subscriptions",
      "quantity"
    ],
    "13049143.8": [
      "public",
      "subscriptions",
      "create_time"
    ],
    "13049143.9": [
      "public",
      "subscriptions",
      "update_time"
    ],
    "13049143.10": [
      "public",
      "subscriptions",
      "plan_overridden"
    ],
    "13049143.11": [
      "public",
      "subscriptions",
      "subscriber"
    ],
    "13049143.12": [
      "public",
      "subscriptions",
      "outstanding_balance_currency"
    ],
    "13049143.13": [
      "public",
      "subscriptions",
      "outstanding_balance_value"
    ],
    "13049143.19": [
      "public",
      "subscriptions",
      "total_cycles"
    ],
    "13049143.20": [
      "public",
      "subscriptions",
      "last_payment_amount_currency"
    ],
    "13049143.21": [
      "public",
      "subscriptions",
      "last_payment_amount_value"
    ],
    "13049143.22": [
      "public",
      "subscriptions",
      "last_payment_time"
    ],
    "13049143.23": [
      "public",
      "subscriptions",
      "next_billing_time"
    ],
    "13049143.24": [
      "public",
      "subscriptions",
      "failed_payments_count"
    ],
    "13049143.25": [
      "public",
      "subscriptions",
      "cycle"
    ],
    "13049143.26": [
      "public",
      "subscriptions",
      "user_id"
    ],
    "13003347.4": [
      "public",
      "domains",
      "email_count"
    ],
    "13003347.2": [
      "public",
      "domains",
      "entity_count"
    ],
    "13003347.5": [
      "public",
      "domains",
      "alive"
    ],
    "13003347.1": [
      "public",
      "domains",
      "name"
    ],
    "13003347.3": [
      "public",
      "domains",
      "entity_with_email_count"
    ],
    "13002808.4": [
      "public",
      "unlocked_contacts",
      "created_at"
    ],
    "13002808.3": [
      "public",
      "unlocked_contacts",
      "created_by"
    ],
    "13002808.2": [
      "public",
      "unlocked_contacts",
      "person_id"
    ],
    "13002808.1": [
      "public",
      "unlocked_contacts",
      "id"
    ],
    "13002596.18": [
      "public",
      "subscription_plans",
      "status"
    ],
    "13002596.14": [
      "public",
      "subscription_plans",
      "total_cycles"
    ],
    "13002596.15": [
      "public",
      "subscription_plans",
      "payment_failure_threshold"
    ],
    "13002596.16": [
      "public",
      "subscription_plans",
      "auto_bill_outstanding"
    ],
    "13002596.17": [
      "public",
      "subscription_plans",
      "setup_fee_failure_action"
    ],
    "13002596.13": [
      "public",
      "subscription_plans",
      "billing_cycle_unit"
    ],
    "13002596.19": [
      "public",
      "subscription_plans",
      "is_featured"
    ],
    "13002596.3": [
      "public",
      "subscription_plans",
      "paypal_plan_id"
    ],
    "13002596.1": [
      "public",
      "subscription_plans",
      "id"
    ],
    "13002596.20": [
      "public",
      "subscription_plans",
      "sort_order"
    ],
    "13002596.21": [
      "public",
      "subscription_plans",
      "created_at"
    ],
    "13002596.2": [
      "public",
      "subscription_plans",
      "product_id"
    ],
    "13002596.6": [
      "public",
      "subscription_plans",
      "plan_type"
    ],
    "13002596.5": [
      "public",
      "subscription_plans",
      "description"
    ],
    "13002596.4": [
      "public",
      "subscription_plans",
      "name"
    ],
    "13002596.7": [
      "public",
      "subscription_plans",
      "monthly_price"
    ],
    "13002596.8": [
      "public",
      "subscription_plans",
      "currency"
    ],
    "13002596.9": [
      "public",
      "subscription_plans",
      "setup_fee"
    ],
    "13002596.10": [
      "public",
      "subscription_plans",
      "trial_days"
    ],
    "13002596.11": [
      "public",
      "subscription_plans",
      "trial_price"
    ],
    "13002596.12": [
      "public",
      "subscription_plans",
      "billing_cycle_interval"
    ],
    "13002584.4": [
      "public",
      "subscription_products",
      "description"
    ],
    "13002584.1": [
      "public",
      "subscription_products",
      "id"
    ],
    "13002584.10": [
      "public",
      "subscription_products",
      "created_at"
    ],
    "13002584.9": [
      "public",
      "subscription_products",
      "is_active"
    ],
    "13002584.8": [
      "public",
      "subscription_products",
      "home_url"
    ],
    "13002584.7": [
      "public",
      "subscription_products",
      "image_url"
    ],
    "13002584.6": [
      "public",
      "subscription_products",
      "category"
    ],
    "13002584.5": [
      "public",
      "subscription_products",
      "type"
    ],
    "13002584.2": [
      "public",
      "subscription_products",
      "paypal_product_id"
    ],
    "13002584.3": [
      "public",
      "subscription_products",
      "name"
    ],
    "13002134.2": [
      "public",
      "city_country_temp",
      "country_count"
    ],
    "13002134.1": [
      "public",
      "city_country_temp",
      "name"
    ],
    "13002134.3": [
      "public",
      "city_country_temp",
      "correct_city_id"
    ],
    "13000668.6": [
      "public",
      "geo_cities",
      "address_count"
    ],
    "13000668.1": [
      "public",
      "geo_cities",
      "id"
    ],
    "13000668.3": [
      "public",
      "geo_cities",
      "state_id"
    ],
    "13000668.2": [
      "public",
      "geo_cities",
      "name"
    ],
    "13000668.8": [
      "public",
      "geo_cities",
      "replace_state_id"
    ],
    "13000668.7": [
      "public",
      "geo_cities",
      "replace_city_id"
    ],
    "13000668.9": [
      "public",
      "geo_cities",
      "address_count_new"
    ],
    "13000668.4": [
      "public",
      "geo_cities",
      "created_at"
    ],
    "13000493.1": [
      "public",
      "organization_invitations",
      "id"
    ],
    "13000493.8": [
      "public",
      "organization_invitations",
      "accepted_at"
    ],
    "13000493.6": [
      "public",
      "organization_invitations",
      "created_at"
    ],
    "13000493.3": [
      "public",
      "organization_invitations",
      "invited_email"
    ],
    "13000493.5": [
      "public",
      "organization_invitations",
      "invited_by"
    ],
    "13000493.2": [
      "public",
      "organization_invitations",
      "organization_id"
    ],
    "13000493.7": [
      "public",
      "organization_invitations",
      "accepted_by"
    ],
    "13000493.9": [
      "public",
      "organization_invitations",
      "status"
    ],
    "13000493.10": [
      "public",
      "organization_invitations",
      "meta_data"
    ],
    "13000493.4": [
      "public",
      "organization_invitations",
      "token"
    ],
    "13000463.3": [
      "public",
      "organization_members",
      "user_id"
    ],
    "13000463.2": [
      "public",
      "organization_members",
      "organization_id"
    ],
    "13000463.6": [
      "public",
      "organization_members",
      "invited_by"
    ],
    "13000463.5": [
      "public",
      "organization_members",
      "joined_at"
    ],
    "13000463.1": [
      "public",
      "organization_members",
      "id"
    ],
    "13000463.4": [
      "public",
      "organization_members",
      "role"
    ],
    "13000463.7": [
      "public",
      "organization_members",
      "status"
    ],
    "13000448.4": [
      "public",
      "organizations",
      "created_at"
    ],
    "13000448.2": [
      "public",
      "organizations",
      "name"
    ],
    "13000448.5": [
      "public",
      "organizations",
      "updated_at"
    ],
    "13000448.6": [
      "public",
      "organizations",
      "settings"
    ],
    "13000448.3": [
      "public",
      "organizations",
      "created_by"
    ],
    "13000448.1": [
      "public",
      "organizations",
      "id"
    ],
    "12991451.8": [
      "public",
      "user_meta",
      "updated_at"
    ],
    "12991451.9": [
      "public",
      "user_meta",
      "location"
    ],
    "12991451.2": [
      "public",
      "user_meta",
      "user_id"
    ],
    "12991451.1": [
      "public",
      "user_meta",
      "id"
    ],
    "12991451.3": [
      "public",
      "user_meta",
      "tier_id"
    ],
    "12991451.10": [
      "public",
      "user_meta",
      "country_code"
    ],
    "12991451.4": [
      "public",
      "user_meta",
      "start_date"
    ],
    "12991451.5": [
      "public",
      "user_meta",
      "end_date"
    ],
    "12991451.6": [
      "public",
      "user_meta",
      "is_active"
    ],
    "12991451.7": [
      "public",
      "user_meta",
      "created_at"
    ],
    "12991441.3": [
      "public",
      "rate_limit_tiers",
      "usage_limit"
    ],
    "12991441.5": [
      "public",
      "rate_limit_tiers",
      "skip_rate_limit"
    ],
    "12991441.2": [
      "public",
      "rate_limit_tiers",
      "tier_name"
    ],
    "12991441.1": [
      "public",
      "rate_limit_tiers",
      "id"
    ],
    "12991426.4": [
      "public",
      "api_logs",
      "endpoint_type"
    ],
    "12991426.9": [
      "public",
      "api_logs",
      "processing_time"
    ],
    "12991426.10": [
      "public",
      "api_logs",
      "created_at"
    ],
    "12991426.1": [
      "public",
      "api_logs",
      "id"
    ],
    "12991426.11": [
      "public",
      "api_logs",
      "ip"
    ],
    "12991426.3": [
      "public",
      "api_logs",
      "endpoint"
    ],
    "12991426.5": [
      "public",
      "api_logs",
      "method"
    ],
    "12991426.6": [
      "public",
      "api_logs",
      "status_code"
    ],
    "12991426.7": [
      "public",
      "api_logs",
      "request_body"
    ],
    "12991426.8": [
      "public",
      "api_logs",
      "request_query"
    ],
    "12991426.12": [
      "public",
      "api_logs",
      "mac"
    ],
    "12991426.2": [
      "public",
      "api_logs",
      "user_id"
    ],
    "12979979.1": [
      "public",
      "me_sectors",
      "me_id"
    ],
    "12979979.2": [
      "public",
      "me_sectors",
      "name"
    ],
    "12979972.1": [
      "public",
      "me_geo",
      "me_id"
    ],
    "12979972.2": [
      "public",
      "me_geo",
      "name"
    ],
    "12979930.2": [
      "public",
      "me_contacts",
      "fc_id"
    ],
    "12979930.1": [
      "public",
      "me_contacts",
      "id"
    ],
    "12979930.5": [
      "public",
      "me_contacts",
      "email"
    ],
    "12979930.3": [
      "public",
      "me_contacts",
      "data"
    ],
    "12979930.7": [
      "public",
      "me_contacts",
      "people_id"
    ],
    "12979930.4": [
      "public",
      "me_contacts",
      "created_at"
    ],
    "12979930.6": [
      "public",
      "me_contacts",
      "f_id"
    ],
    "12979919.1": [
      "public",
      "me_firms",
      "id"
    ],
    "12979919.3": [
      "public",
      "me_firms",
      "data"
    ],
    "12979919.5": [
      "public",
      "me_firms",
      "entity_id_from_pbid_match"
    ],
    "12979919.6": [
      "public",
      "me_firms",
      "temp_flag"
    ],
    "12979919.4": [
      "public",
      "me_firms",
      "created_at"
    ],
    "12979919.2": [
      "public",
      "me_firms",
      "f_id"
    ],
    "12979805.2": [
      "public",
      "data_source",
      "name"
    ],
    "12979805.1": [
      "public",
      "data_source",
      "id"
    ],
    "12979651.1": [
      "public",
      "list_people_ids",
      "list_id"
    ],
    "12979651.2": [
      "public",
      "list_people_ids",
      "people_id"
    ],
    "12979651.3": [
      "public",
      "list_people_ids",
      "created_at"
    ],
    "12979651.4": [
      "public",
      "list_people_ids",
      "id"
    ],
    "12979602.8": [
      "public",
      "llm_messages",
      "type"
    ],
    "12979602.7": [
      "public",
      "llm_messages",
      "content"
    ],
    "12979602.6": [
      "public",
      "llm_messages",
      "llm_message_id"
    ],
    "12979602.5": [
      "public",
      "llm_messages",
      "created_at"
    ],
    "12979602.3": [
      "public",
      "llm_messages",
      "filters"
    ],
    "12979602.2": [
      "public",
      "llm_messages",
      "role"
    ],
    "12979602.1": [
      "public",
      "llm_messages",
      "id"
    ],
    "12979602.4": [
      "public",
      "llm_messages",
      "chat_id"
    ],
    "12979602.12": [
      "public",
      "llm_messages",
      "tool_input"
    ],
    "12979602.11": [
      "public",
      "llm_messages",
      "tool_used_id"
    ],
    "12979602.10": [
      "public",
      "llm_messages",
      "tool_data"
    ],
    "12979602.9": [
      "public",
      "llm_messages",
      "tool_used"
    ],
    "12979186.1": [
      "auth",
      "su_webauthn_account_recovery_tokens",
      "app_id"
    ],
    "12979186.2": [
      "auth",
      "su_webauthn_account_recovery_tokens",
      "tenant_id"
    ],
    "12979186.5": [
      "auth",
      "su_webauthn_account_recovery_tokens",
      "token"
    ],
    "12979186.3": [
      "auth",
      "su_webauthn_account_recovery_tokens",
      "user_id"
    ],
    "12979186.6": [
      "auth",
      "su_webauthn_account_recovery_tokens",
      "expires_at"
    ],
    "12979186.4": [
      "auth",
      "su_webauthn_account_recovery_tokens",
      "email"
    ],
    "12979172.5": [
      "auth",
      "su_webauthn_credentials",
      "counter"
    ],
    "12979172.4": [
      "auth",
      "su_webauthn_credentials",
      "user_id"
    ],
    "12979172.3": [
      "auth",
      "su_webauthn_credentials",
      "rp_id"
    ],
    "12979172.2": [
      "auth",
      "su_webauthn_credentials",
      "app_id"
    ],
    "12979172.1": [
      "auth",
      "su_webauthn_credentials",
      "id"
    ],
    "12979172.9": [
      "auth",
      "su_webauthn_credentials",
      "updated_at"
    ],
    "12979172.7": [
      "auth",
      "su_webauthn_credentials",
      "transports"
    ],
    "12979172.8": [
      "auth",
      "su_webauthn_credentials",
      "created_at"
    ],
    "12979172.6": [
      "auth",
      "su_webauthn_credentials",
      "public_key"
    ],
    "12979155.11": [
      "auth",
      "su_webauthn_generated_options",
      "user_presence_required"
    ],
    "12979155.2": [
      "auth",
      "su_webauthn_generated_options",
      "tenant_id"
    ],
    "12979155.1": [
      "auth",
      "su_webauthn_generated_options",
      "app_id"
    ],
    "12979155.10": [
      "auth",
      "su_webauthn_generated_options",
      "created_at"
    ],
    "12979155.12": [
      "auth",
      "su_webauthn_generated_options",
      "user_verification"
    ],
    "12979155.3": [
      "auth",
      "su_webauthn_generated_options",
      "id"
    ],
    "12979155.9": [
      "auth",
      "su_webauthn_generated_options",
      "expires_at"
    ],
    "12979155.4": [
      "auth",
      "su_webauthn_generated_options",
      "challenge"
    ],
    "12979155.5": [
      "auth",
      "su_webauthn_generated_options",
      "email"
    ],
    "12979155.6": [
      "auth",
      "su_webauthn_generated_options",
      "rp_id"
    ],
    "12979155.7": [
      "auth",
      "su_webauthn_generated_options",
      "rp_name"
    ],
    "12979155.8": [
      "auth",
      "su_webauthn_generated_options",
      "origin"
    ],
    "12979140.3": [
      "auth",
      "su_webauthn_user_to_tenant",
      "user_id"
    ],
    "12979140.1": [
      "auth",
      "su_webauthn_user_to_tenant",
      "app_id"
    ],
    "12979140.2": [
      "auth",
      "su_webauthn_user_to_tenant",
      "tenant_id"
    ],
    "12979140.4": [
      "auth",
      "su_webauthn_user_to_tenant",
      "email"
    ],
    "12979127.2": [
      "auth",
      "su_webauthn_users",
      "user_id"
    ],
    "12979127.1": [
      "auth",
      "su_webauthn_users",
      "app_id"
    ],
    "12979127.4": [
      "auth",
      "su_webauthn_users",
      "rp_id"
    ],
    "12979127.3": [
      "auth",
      "su_webauthn_users",
      "email"
    ],
    "12979127.5": [
      "auth",
      "su_webauthn_users",
      "time_joined"
    ],
    "12978580.2": [
      "public",
      "portfolio_industries",
      "industry_id"
    ],
    "12978580.4": [
      "public",
      "portfolio_industries",
      "created_at"
    ],
    "12978580.3": [
      "public",
      "portfolio_industries",
      "entity_id"
    ],
    "12978580.1": [
      "public",
      "portfolio_industries",
      "id"
    ],
    "12978559.2": [
      "public",
      "portfolio_countries",
      "country_id"
    ],
    "12978559.3": [
      "public",
      "portfolio_countries",
      "entity_id"
    ],
    "12978559.1": [
      "public",
      "portfolio_countries",
      "id"
    ],
    "12978559.4": [
      "public",
      "portfolio_countries",
      "created_at"
    ],
    "12978533.10": [
      "public",
      "llm_messages_bug",
      "tool_used"
    ],
    "12978533.5": [
      "public",
      "llm_messages_bug",
      "chat_id"
    ],
    "12978533.13": [
      "public",
      "llm_messages_bug",
      "tool_input"
    ],
    "12978533.12": [
      "public",
      "llm_messages_bug",
      "tool_used_id"
    ],
    "12978533.11": [
      "public",
      "llm_messages_bug",
      "tool_data"
    ],
    "12978533.9": [
      "public",
      "llm_messages_bug",
      "type"
    ],
    "12978533.8": [
      "public",
      "llm_messages_bug",
      "content"
    ],
    "12978533.7": [
      "public",
      "llm_messages_bug",
      "llm_message_id"
    ],
    "12978533.6": [
      "public",
      "llm_messages_bug",
      "created_at"
    ],
    "12978533.4": [
      "public",
      "llm_messages_bug",
      "filters"
    ],
    "12978533.3": [
      "public",
      "llm_messages_bug",
      "role"
    ],
    "12978533.17": [
      "public",
      "llm_messages_bug",
      "id"
    ],
    "12978241.2": [
      "public",
      "portfolio_keywords",
      "entity_id"
    ],
    "12978241.3": [
      "public",
      "portfolio_keywords",
      "keyword"
    ],
    "12978241.4": [
      "public",
      "portfolio_keywords",
      "created_at"
    ],
    "12978241.1": [
      "public",
      "portfolio_keywords",
      "id"
    ],
    "12091532.8": [
      "public",
      "list_entity_ids",
      "id"
    ],
    "12091532.1": [
      "public",
      "list_entity_ids",
      "list_id"
    ],
    "12091532.2": [
      "public",
      "list_entity_ids",
      "entity_id"
    ],
    "12091532.3": [
      "public",
      "list_entity_ids",
      "created_at"
    ],
    "11733081.5": [
      "public",
      "lists",
      "created_by"
    ],
    "11733081.1": [
      "public",
      "lists",
      "id"
    ],
    "11733081.2": [
      "public",
      "lists",
      "name"
    ],
    "11733081.10": [
      "public",
      "lists",
      "is_people"
    ],
    "11733081.9": [
      "public",
      "lists",
      "list_type"
    ],
    "11733081.7": [
      "public",
      "lists",
      "updated_at"
    ],
    "11733081.6": [
      "public",
      "lists",
      "created_at"
    ],
    "11733081.3": [
      "public",
      "lists",
      "notes"
    ],
    "11728623.5": [
      "public",
      "entity_scraping",
      "entity_id"
    ],
    "11728623.6": [
      "public",
      "entity_scraping",
      "created_at"
    ],
    "11728623.4": [
      "public",
      "entity_scraping",
      "data"
    ],
    "11728623.3": [
      "public",
      "entity_scraping",
      "error"
    ],
    "11728623.2": [
      "public",
      "entity_scraping",
      "status"
    ],
    "11728623.1": [
      "public",
      "entity_scraping",
      "id"
    ],
    "11728592.1": [
      "public",
      "entity_lp_fund_type_pref",
      "entity_id"
    ],
    "11728592.2": [
      "public",
      "entity_lp_fund_type_pref",
      "fund_type_id"
    ],
    "11728573.1": [
      "public",
      "entity_lp_types",
      "entity_id"
    ],
    "11728573.2": [
      "public",
      "entity_lp_types",
      "lp_type_id"
    ],
    "11728561.2": [
      "public",
      "entity_lp_details",
      "ftf"
    ],
    "11728561.1": [
      "public",
      "entity_lp_details",
      "entity_id"
    ],
    "11728551.2": [
      "public",
      "lp_types",
      "name"
    ],
    "11728551.1": [
      "public",
      "lp_types",
      "id"
    ],
    "11728541.2": [
      "public",
      "fund_types",
      "name"
    ],
    "11728541.1": [
      "public",
      "fund_types",
      "id"
    ],
    "11671958.2": [
      "public",
      "company_industries",
      "company_id"
    ],
    "11671958.5": [
      "public",
      "company_industries",
      "primary_industry"
    ],
    "11671958.4": [
      "public",
      "company_industries",
      "vertical"
    ],
    "11671958.3": [
      "public",
      "company_industries",
      "industry_id"
    ],
    "11671958.1": [
      "public",
      "company_industries",
      "id"
    ],
    "11671915.2": [
      "public",
      "keywords",
      "entity_count"
    ],
    "11671915.3": [
      "public",
      "keywords",
      "embedding"
    ],
    "11671915.4": [
      "public",
      "keywords",
      "investor_count"
    ],
    "11671915.1": [
      "public",
      "keywords",
      "keyword"
    ],
    "11671864.1": [
      "public",
      "entity_keywords",
      "entity_id"
    ],
    "11671864.2": [
      "public",
      "entity_keywords",
      "keyword"
    ],
    "11597985.3": [
      "public",
      "cb_mna_dump",
      "mna_ob"
    ],
    "11597985.1": [
      "public",
      "cb_mna_dump",
      "id"
    ],
    "11597985.4": [
      "public",
      "cb_mna_dump",
      "created_at"
    ],
    "11597985.2": [
      "public",
      "cb_mna_dump",
      "cb_mna_id"
    ],
    "11482634.4": [
      "public",
      "cb_deal_dump",
      "created_at"
    ],
    "11482634.3": [
      "public",
      "cb_deal_dump",
      "deal_ob"
    ],
    "11482634.2": [
      "public",
      "cb_deal_dump",
      "cb_deal_id"
    ],
    "11482634.1": [
      "public",
      "cb_deal_dump",
      "id"
    ],
    "11389770.4": [
      "public",
      "cb_people_dump",
      "created_at"
    ],
    "11389770.3": [
      "public",
      "cb_people_dump",
      "person_ob"
    ],
    "11389770.1": [
      "public",
      "cb_people_dump",
      "id"
    ],
    "11389770.2": [
      "public",
      "cb_people_dump",
      "cb_person_id"
    ],
    "11389759.4": [
      "public",
      "cb_contacts_dump",
      "created_at"
    ],
    "11389759.1": [
      "public",
      "cb_contacts_dump",
      "id"
    ],
    "11389759.3": [
      "public",
      "cb_contacts_dump",
      "contact_ob"
    ],
    "11389759.2": [
      "public",
      "cb_contacts_dump",
      "cb_contact_id"
    ],
    "9851325.3": [
      "public",
      "cb_dump",
      "company_ob"
    ],
    "9851325.5": [
      "public",
      "cb_dump",
      "created_at"
    ],
    "9851325.2": [
      "public",
      "cb_dump",
      "cb_company_id"
    ],
    "9851325.4": [
      "public",
      "cb_dump",
      "investor_ob"
    ],
    "9851325.1": [
      "public",
      "cb_dump",
      "id"
    ],
    "9851251.6": [
      "public",
      "llm_chat",
      "filter_history"
    ],
    "9851251.3": [
      "public",
      "llm_chat",
      "created_by"
    ],
    "9851251.1": [
      "public",
      "llm_chat",
      "id"
    ],
    "9851251.2": [
      "public",
      "llm_chat",
      "created_at"
    ],
    "9851251.4": [
      "public",
      "llm_chat",
      "chat"
    ],
    "9851251.5": [
      "public",
      "llm_chat",
      "name"
    ],
    "9851137.6": [
      "public",
      "entity_company_details",
      "vc_raised"
    ],
    "9851137.4": [
      "public",
      "entity_company_details",
      "net_debt"
    ],
    "9851137.3": [
      "public",
      "entity_company_details",
      "ebitda"
    ],
    "9851137.2": [
      "public",
      "entity_company_details",
      "ebit"
    ],
    "9851137.1": [
      "public",
      "entity_company_details",
      "entity_id"
    ],
    "9851137.21": [
      "public",
      "entity_company_details",
      "valuation_date"
    ],
    "9851137.20": [
      "public",
      "entity_company_details",
      "valuation"
    ],
    "9851137.19": [
      "public",
      "entity_company_details",
      "company_details"
    ],
    "9851137.18": [
      "public",
      "entity_company_details",
      "first_financing_size"
    ],
    "9851137.17": [
      "public",
      "entity_company_details",
      "first_financing_debt"
    ],
    "9851137.16": [
      "public",
      "entity_company_details",
      "first_financing_date"
    ],
    "9851137.15": [
      "public",
      "entity_company_details",
      "last_financing_size"
    ],
    "9851137.14": [
      "public",
      "entity_company_details",
      "last_financing_debt"
    ],
    "9851137.13": [
      "public",
      "entity_company_details",
      "last_financing_date"
    ],
    "9851137.12": [
      "public",
      "entity_company_details",
      "financing_status"
    ],
    "9851137.11": [
      "public",
      "entity_company_details",
      "enterprise_value"
    ],
    "9851137.10": [
      "public",
      "entity_company_details",
      "business_status"
    ],
    "9851137.9": [
      "public",
      "entity_company_details",
      "fiscal_period"
    ],
    "9851137.8": [
      "public",
      "entity_company_details",
      "gross_profit"
    ],
    "9851137.7": [
      "public",
      "entity_company_details",
      "net_income"
    ],
    "9851137.5": [
      "public",
      "entity_company_details",
      "revenue"
    ],
    "9197459.1": [
      "public",
      "user_preferences",
      "id"
    ],
    "9197459.2": [
      "public",
      "user_preferences",
      "user_id"
    ],
    "9197459.3": [
      "public",
      "user_preferences",
      "preference"
    ],
    "9008998.2": [
      "public",
      "saved_searches",
      "created_at"
    ],
    "9008998.1": [
      "public",
      "saved_searches",
      "id"
    ],
    "9008998.4": [
      "public",
      "saved_searches",
      "created_by"
    ],
    "9008998.8": [
      "public",
      "saved_searches",
      "is_people"
    ],
    "9008998.7": [
      "public",
      "saved_searches",
      "notes"
    ],
    "9008998.6": [
      "public",
      "saved_searches",
      "filters"
    ],
    "9008998.5": [
      "public",
      "saved_searches",
      "name"
    ],
    "9008998.3": [
      "public",
      "saved_searches",
      "search_type"
    ],
    "7880626.1": [
      "public",
      "entity_industry_pref",
      "id"
    ],
    "7880626.2": [
      "public",
      "entity_industry_pref",
      "entity_id"
    ],
    "7880626.3": [
      "public",
      "entity_industry_pref",
      "industry_id"
    ],
    "7541482.3": [
      "public",
      "entity_continent_pref",
      "geo_continent_id"
    ],
    "7541482.2": [
      "public",
      "entity_continent_pref",
      "entity_id"
    ],
    "7541482.1": [
      "public",
      "entity_continent_pref",
      "id"
    ],
    "7541462.3": [
      "public",
      "entity_country_pref",
      "geo_country_id"
    ],
    "7541462.2": [
      "public",
      "entity_country_pref",
      "entity_id"
    ],
    "7541462.1": [
      "public",
      "entity_country_pref",
      "id"
    ],
    "7541412.3": [
      "public",
      "entity_state_group_pref",
      "geo_state_group_id"
    ],
    "7541412.2": [
      "public",
      "entity_state_group_pref",
      "entity_id"
    ],
    "7541412.1": [
      "public",
      "entity_state_group_pref",
      "id"
    ],
    "7541392.1": [
      "public",
      "geo_state_group_states",
      "id"
    ],
    "7541392.2": [
      "public",
      "geo_state_group_states",
      "geo_state_group_id"
    ],
    "7541392.3": [
      "public",
      "geo_state_group_states",
      "geo_state_id"
    ],
    "7541381.2": [
      "public",
      "geo_state_groups",
      "name"
    ],
    "7541381.3": [
      "public",
      "geo_state_groups",
      "created_at"
    ],
    "7541381.1": [
      "public",
      "geo_state_groups",
      "id"
    ],
    "7541361.2": [
      "public",
      "entity_state_pref",
      "entity_id"
    ],
    "7541361.3": [
      "public",
      "entity_state_pref",
      "geo_state_id"
    ],
    "7541361.1": [
      "public",
      "entity_state_pref",
      "id"
    ],
    "7541337.2": [
      "public",
      "entity_pb_other_pref",
      "entity_id"
    ],
    "7541337.1": [
      "public",
      "entity_pb_other_pref",
      "id"
    ],
    "7541337.3": [
      "public",
      "entity_pb_other_pref",
      "pb_other_pref_id"
    ],
    "7541326.2": [
      "public",
      "pb_other_preferences",
      "name"
    ],
    "7541326.1": [
      "public",
      "pb_other_preferences",
      "id"
    ],
    "7541326.3": [
      "public",
      "pb_other_preferences",
      "created_at"
    ],
    "7541306.2": [
      "public",
      "entity_stage_pref",
      "entity_id"
    ],
    "7541306.1": [
      "public",
      "entity_stage_pref",
      "id"
    ],
    "7541306.3": [
      "public",
      "entity_stage_pref",
      "stage_type_id"
    ],
    "7541285.3": [
      "public",
      "entity_pb_indus_pref",
      "pb_indus_id"
    ],
    "7541285.2": [
      "public",
      "entity_pb_indus_pref",
      "entity_id"
    ],
    "7541285.1": [
      "public",
      "entity_pb_indus_pref",
      "id"
    ],
    "7541184.3": [
      "public",
      "industries",
      "created_at"
    ],
    "7541184.2": [
      "public",
      "industries",
      "name"
    ],
    "7541184.5": [
      "public",
      "industries",
      "category2"
    ],
    "7541184.4": [
      "public",
      "industries",
      "category1"
    ],
    "7541184.1": [
      "public",
      "industries",
      "id"
    ],
    "7541172.3": [
      "public",
      "stage_types",
      "created_at"
    ],
    "7541172.2": [
      "public",
      "stage_types",
      "name"
    ],
    "7541172.1": [
      "public",
      "stage_types",
      "id"
    ],
    "7541113.1": [
      "public",
      "entity_investment_preferences",
      "entity_id"
    ],
    "7541113.3": [
      "public",
      "entity_investment_preferences",
      "ebit"
    ],
    "7541113.11": [
      "public",
      "entity_investment_preferences",
      "dry_powder"
    ],
    "7541113.12": [
      "public",
      "entity_investment_preferences",
      "aum"
    ],
    "7541113.13": [
      "public",
      "entity_investment_preferences",
      "last_inv_date"
    ],
    "7541113.4": [
      "public",
      "entity_investment_preferences",
      "investment_amount"
    ],
    "7541113.10": [
      "public",
      "entity_investment_preferences",
      "geo_prefs_not_found"
    ],
    "7541113.9": [
      "public",
      "entity_investment_preferences",
      "investment_type"
    ],
    "7541113.8": [
      "public",
      "entity_investment_preferences",
      "range_ambiguous"
    ],
    "7541113.6": [
      "public",
      "entity_investment_preferences",
      "company_valuation"
    ],
    "7541113.5": [
      "public",
      "entity_investment_preferences",
      "deal_size"
    ],
    "7541113.7": [
      "public",
      "entity_investment_preferences",
      "revenue"
    ],
    "7541113.2": [
      "public",
      "entity_investment_preferences",
      "ebitda"
    ],
    "7271193.2": [
      "public",
      "emails",
      "email"
    ],
    "7271193.3": [
      "public",
      "emails",
      "person_role_id"
    ],
    "7271193.5": [
      "public",
      "emails",
      "source"
    ],
    "7271193.6": [
      "public",
      "emails",
      "domain"
    ],
    "7271193.4": [
      "public",
      "emails",
      "created_at"
    ],
    "7271193.1": [
      "public",
      "emails",
      "id"
    ],
    "5699453.3": [
      "public",
      "pb_vert",
      "created_at"
    ],
    "5699453.1": [
      "public",
      "pb_vert",
      "id"
    ],
    "5699453.2": [
      "public",
      "pb_vert",
      "name"
    ],
    "5699453.4": [
      "public",
      "pb_vert",
      "replace_sectors"
    ],
    "5699439.4": [
      "public",
      "pb_indus",
      "replace_sectors"
    ],
    "5699439.6": [
      "public",
      "pb_indus",
      "category1"
    ],
    "5699439.5": [
      "public",
      "pb_indus",
      "new_sector_id"
    ],
    "5699439.7": [
      "public",
      "pb_indus",
      "category2"
    ],
    "5699439.1": [
      "public",
      "pb_indus",
      "id"
    ],
    "5699439.2": [
      "public",
      "pb_indus",
      "name"
    ],
    "5699439.3": [
      "public",
      "pb_indus",
      "created_at"
    ],
    "5699439.8": [
      "public",
      "pb_indus",
      "pb_id"
    ],
    "4779356.7": [
      "auth",
      "su_oauth_logout_challenges",
      "time_created"
    ],
    "4779356.5": [
      "auth",
      "su_oauth_logout_challenges",
      "session_handle"
    ],
    "4779356.6": [
      "auth",
      "su_oauth_logout_challenges",
      "state"
    ],
    "4779356.4": [
      "auth",
      "su_oauth_logout_challenges",
      "post_logout_redirect_uri"
    ],
    "4779356.1": [
      "auth",
      "su_oauth_logout_challenges",
      "app_id"
    ],
    "4779356.2": [
      "auth",
      "su_oauth_logout_challenges",
      "challenge"
    ],
    "4779356.3": [
      "auth",
      "su_oauth_logout_challenges",
      "client_id"
    ],
    "4779343.3": [
      "auth",
      "su_oauth_m2m_tokens",
      "iat"
    ],
    "4779343.1": [
      "auth",
      "su_oauth_m2m_tokens",
      "app_id"
    ],
    "4779343.2": [
      "auth",
      "su_oauth_m2m_tokens",
      "client_id"
    ],
    "4779343.4": [
      "auth",
      "su_oauth_m2m_tokens",
      "exp"
    ],
    "4779324.3": [
      "auth",
      "su_oauth_sessions",
      "client_id"
    ],
    "4779324.4": [
      "auth",
      "su_oauth_sessions",
      "session_handle"
    ],
    "4779324.8": [
      "auth",
      "su_oauth_sessions",
      "exp"
    ],
    "4779324.7": [
      "auth",
      "su_oauth_sessions",
      "jti"
    ],
    "4779324.5": [
      "auth",
      "su_oauth_sessions",
      "external_refresh_token"
    ],
    "4779324.6": [
      "auth",
      "su_oauth_sessions",
      "internal_refresh_token"
    ],
    "4779324.2": [
      "auth",
      "su_oauth_sessions",
      "app_id"
    ],
    "4779324.1": [
      "auth",
      "su_oauth_sessions",
      "gid"
    ],
    "4779312.3": [
      "auth",
      "su_oauth_clients",
      "client_secret"
    ],
    "4779312.2": [
      "auth",
      "su_oauth_clients",
      "client_id"
    ],
    "4779312.1": [
      "auth",
      "su_oauth_clients",
      "app_id"
    ],
    "4779312.4": [
      "auth",
      "su_oauth_clients",
      "enable_refresh_token_rotation"
    ],
    "4779312.5": [
      "auth",
      "su_oauth_clients",
      "is_client_credentials_only"
    ],
    "4779295.4": [
      "auth",
      "su_bulk_import_users",
      "raw_data"
    ],
    "4779295.5": [
      "auth",
      "su_bulk_import_users",
      "status"
    ],
    "4779295.6": [
      "auth",
      "su_bulk_import_users",
      "error_msg"
    ],
    "4779295.1": [
      "auth",
      "su_bulk_import_users",
      "id"
    ],
    "4779295.2": [
      "auth",
      "su_bulk_import_users",
      "app_id"
    ],
    "4779295.7": [
      "auth",
      "su_bulk_import_users",
      "created_at"
    ],
    "4779295.8": [
      "auth",
      "su_bulk_import_users",
      "updated_at"
    ],
    "4779295.3": [
      "auth",
      "su_bulk_import_users",
      "primary_user_id"
    ],
    "4779275.1": [
      "auth",
      "su_totp_used_codes",
      "app_id"
    ],
    "4779275.3": [
      "auth",
      "su_totp_used_codes",
      "user_id"
    ],
    "4779275.2": [
      "auth",
      "su_totp_used_codes",
      "tenant_id"
    ],
    "4779275.7": [
      "auth",
      "su_totp_used_codes",
      "created_time_ms"
    ],
    "4779275.4": [
      "auth",
      "su_totp_used_codes",
      "code"
    ],
    "4779275.5": [
      "auth",
      "su_totp_used_codes",
      "is_valid"
    ],
    "4779275.6": [
      "auth",
      "su_totp_used_codes",
      "expiry_time_ms"
    ],
    "4779261.4": [
      "auth",
      "su_totp_user_devices",
      "secret_key"
    ],
    "4779261.7": [
      "auth",
      "su_totp_user_devices",
      "verified"
    ],
    "4779261.8": [
      "auth",
      "su_totp_user_devices",
      "created_at"
    ],
    "4779261.6": [
      "auth",
      "su_totp_user_devices",
      "skew"
    ],
    "4779261.1": [
      "auth",
      "su_totp_user_devices",
      "app_id"
    ],
    "4779261.2": [
      "auth",
      "su_totp_user_devices",
      "user_id"
    ],
    "4779261.3": [
      "auth",
      "su_totp_user_devices",
      "device_name"
    ],
    "4779261.5": [
      "auth",
      "su_totp_user_devices",
      "period"
    ],
    "4779249.1": [
      "auth",
      "su_totp_users",
      "app_id"
    ],
    "4779249.2": [
      "auth",
      "su_totp_users",
      "user_id"
    ],
    "4779236.1": [
      "auth",
      "su_dashboard_user_sessions",
      "app_id"
    ],
    "4779236.4": [
      "auth",
      "su_dashboard_user_sessions",
      "time_created"
    ],
    "4779236.5": [
      "auth",
      "su_dashboard_user_sessions",
      "expiry"
    ],
    "4779236.3": [
      "auth",
      "su_dashboard_user_sessions",
      "user_id"
    ],
    "4779236.2": [
      "auth",
      "su_dashboard_user_sessions",
      "session_id"
    ],
    "4779220.5": [
      "auth",
      "su_dashboard_users",
      "time_joined"
    ],
    "4779220.1": [
      "auth",
      "su_dashboard_users",
      "app_id"
    ],
    "4779220.3": [
      "auth",
      "su_dashboard_users",
      "email"
    ],
    "4779220.2": [
      "auth",
      "su_dashboard_users",
      "user_id"
    ],
    "4779220.4": [
      "auth",
      "su_dashboard_users",
      "password_hash"
    ],
    "4779202.1": [
      "auth",
      "su_userid_mapping",
      "app_id"
    ],
    "4779202.3": [
      "auth",
      "su_userid_mapping",
      "external_user_id"
    ],
    "4779202.4": [
      "auth",
      "su_userid_mapping",
      "external_user_id_info"
    ],
    "4779202.2": [
      "auth",
      "su_userid_mapping",
      "supertokens_user_id"
    ],
    "4779185.2": [
      "auth",
      "su_user_roles",
      "tenant_id"
    ],
    "4779185.1": [
      "auth",
      "su_user_roles",
      "app_id"
    ],
    "4779185.4": [
      "auth",
      "su_user_roles",
      "role"
    ],
    "4779185.3": [
      "auth",
      "su_user_roles",
      "user_id"
    ],
    "4779170.1": [
      "auth",
      "su_role_permissions",
      "app_id"
    ],
    "4779170.2": [
      "auth",
      "su_role_permissions",
      "role"
    ],
    "4779170.3": [
      "auth",
      "su_role_permissions",
      "permission"
    ],
    "4779158.1": [
      "auth",
      "su_roles",
      "app_id"
    ],
    "4779158.2": [
      "auth",
      "su_roles",
      "role"
    ],
    "4779144.3": [
      "auth",
      "su_user_metadata",
      "user_metadata"
    ],
    "4779144.1": [
      "auth",
      "su_user_metadata",
      "app_id"
    ],
    "4779144.2": [
      "auth",
      "su_user_metadata",
      "user_id"
    ],
    "4779128.2": [
      "auth",
      "su_passwordless_codes",
      "tenant_id"
    ],
    "4779128.1": [
      "auth",
      "su_passwordless_codes",
      "app_id"
    ],
    "4779128.5": [
      "auth",
      "su_passwordless_codes",
      "link_code_hash"
    ],
    "4779128.6": [
      "auth",
      "su_passwordless_codes",
      "created_at"
    ],
    "4779128.4": [
      "auth",
      "su_passwordless_codes",
      "device_id_hash"
    ],
    "4779128.3": [
      "auth",
      "su_passwordless_codes",
      "code_id"
    ],
    "4779111.4": [
      "auth",
      "su_passwordless_devices",
      "email"
    ],
    "4779111.1": [
      "auth",
      "su_passwordless_devices",
      "app_id"
    ],
    "4779111.2": [
      "auth",
      "su_passwordless_devices",
      "tenant_id"
    ],
    "4779111.5": [
      "auth",
      "su_passwordless_devices",
      "phone_number"
    ],
    "4779111.3": [
      "auth",
      "su_passwordless_devices",
      "device_id_hash"
    ],
    "4779111.6": [
      "auth",
      "su_passwordless_devices",
      "link_code_salt"
    ],
    "4779111.7": [
      "auth",
      "su_passwordless_devices",
      "failed_attempts"
    ],
    "4779091.2": [
      "auth",
      "su_passwordless_user_to_tenant",
      "tenant_id"
    ],
    "4779091.1": [
      "auth",
      "su_passwordless_user_to_tenant",
      "app_id"
    ],
    "4779091.3": [
      "auth",
      "su_passwordless_user_to_tenant",
      "user_id"
    ],
    "4779091.5": [
      "auth",
      "su_passwordless_user_to_tenant",
      "phone_number"
    ],
    "4779091.4": [
      "auth",
      "su_passwordless_user_to_tenant",
      "email"
    ],
    "4779072.1": [
      "auth",
      "su_passwordless_users",
      "app_id"
    ],
    "4779072.2": [
      "auth",
      "su_passwordless_users",
      "user_id"
    ],
    "4779072.4": [
      "auth",
      "su_passwordless_users",
      "phone_number"
    ],
    "4779072.3": [
      "auth",
      "su_passwordless_users",
      "email"
    ],
    "4779072.5": [
      "auth",
      "su_passwordless_users",
      "time_joined"
    ],
    "4779058.1": [
      "auth",
      "su_jwt_signing_keys",
      "app_id"
    ],
    "4779058.2": [
      "auth",
      "su_jwt_signing_keys",
      "key_id"
    ],
    "4779058.4": [
      "auth",
      "su_jwt_signing_keys",
      "algorithm"
    ],
    "4779058.3": [
      "auth",
      "su_jwt_signing_keys",
      "key_string"
    ],
    "4779058.5": [
      "auth",
      "su_jwt_signing_keys",
      "created_at"
    ],
    "4779043.3": [
      "auth",
      "su_thirdparty_user_to_tenant",
      "user_id"
    ],
    "4779043.2": [
      "auth",
      "su_thirdparty_user_to_tenant",
      "tenant_id"
    ],
    "4779043.4": [
      "auth",
      "su_thirdparty_user_to_tenant",
      "third_party_id"
    ],
    "4779043.1": [
      "auth",
      "su_thirdparty_user_to_tenant",
      "app_id"
    ],
    "4779043.5": [
      "auth",
      "su_thirdparty_user_to_tenant",
      "third_party_user_id"
    ],
    "4779028.1": [
      "auth",
      "su_thirdparty_users",
      "app_id"
    ],
    "4779028.2": [
      "auth",
      "su_thirdparty_users",
      "third_party_id"
    ],
    "4779028.4": [
      "auth",
      "su_thirdparty_users",
      "user_id"
    ],
    "4779028.5": [
      "auth",
      "su_thirdparty_users",
      "email"
    ],
    "4779028.3": [
      "auth",
      "su_thirdparty_users",
      "third_party_user_id"
    ],
    "4779028.6": [
      "auth",
      "su_thirdparty_users",
      "time_joined"
    ],
    "4779010.1": [
      "auth",
      "su_emailverification_tokens",
      "app_id"
    ],
    "4779010.2": [
      "auth",
      "su_emailverification_tokens",
      "tenant_id"
    ],
    "4779010.3": [
      "auth",
      "su_emailverification_tokens",
      "user_id"
    ],
    "4779010.4": [
      "auth",
      "su_emailverification_tokens",
      "email"
    ],
    "4779010.5": [
      "auth",
      "su_emailverification_tokens",
      "token"
    ],
    "4779010.6": [
      "auth",
      "su_emailverification_tokens",
      "token_expiry"
    ],
    "4778998.1": [
      "auth",
      "su_emailverification_verified_emails",
      "app_id"
    ],
    "4778998.3": [
      "auth",
      "su_emailverification_verified_emails",
      "email"
    ],
    "4778998.2": [
      "auth",
      "su_emailverification_verified_emails",
      "user_id"
    ],
    "4778983.4": [
      "auth",
      "su_emailpassword_pswd_reset_tokens",
      "email"
    ],
    "4778983.2": [
      "auth",
      "su_emailpassword_pswd_reset_tokens",
      "user_id"
    ],
    "4778983.1": [
      "auth",
      "su_emailpassword_pswd_reset_tokens",
      "app_id"
    ],
    "4778983.5": [
      "auth",
      "su_emailpassword_pswd_reset_tokens",
      "token_expiry"
    ],
    "4778983.3": [
      "auth",
      "su_emailpassword_pswd_reset_tokens",
      "token"
    ],
    "4778968.2": [
      "auth",
      "su_emailpassword_user_to_tenant",
      "tenant_id"
    ],
    "4778968.3": [
      "auth",
      "su_emailpassword_user_to_tenant",
      "user_id"
    ],
    "4778968.1": [
      "auth",
      "su_emailpassword_user_to_tenant",
      "app_id"
    ],
    "4778968.4": [
      "auth",
      "su_emailpassword_user_to_tenant",
      "email"
    ],
    "4778954.4": [
      "auth",
      "su_emailpassword_users",
      "password_hash"
    ],
    "4778954.1": [
      "auth",
      "su_emailpassword_users",
      "app_id"
    ],
    "4778954.2": [
      "auth",
      "su_emailpassword_users",
      "user_id"
    ],
    "4778954.3": [
      "auth",
      "su_emailpassword_users",
      "email"
    ],
    "4778954.5": [
      "auth",
      "su_emailpassword_users",
      "time_joined"
    ],
    "4778937.3": [
      "auth",
      "su_tenant_thirdparty_provider_clients",
      "tenant_id"
    ],
    "4778937.4": [
      "auth",
      "su_tenant_thirdparty_provider_clients",
      "third_party_id"
    ],
    "4778937.1": [
      "auth",
      "su_tenant_thirdparty_provider_clients",
      "connection_uri_domain"
    ],
    "4778937.2": [
      "auth",
      "su_tenant_thirdparty_provider_clients",
      "app_id"
    ],
    "4778937.10": [
      "auth",
      "su_tenant_thirdparty_provider_clients",
      "additional_config"
    ],
    "4778937.9": [
      "auth",
      "su_tenant_thirdparty_provider_clients",
      "force_pkce"
    ],
    "4778937.8": [
      "auth",
      "su_tenant_thirdparty_provider_clients",
      "scope"
    ],
    "4778937.7": [
      "auth",
      "su_tenant_thirdparty_provider_clients",
      "client_secret"
    ],
    "4778937.6": [
      "auth",
      "su_tenant_thirdparty_provider_clients",
      "client_id"
    ],
    "4778937.5": [
      "auth",
      "su_tenant_thirdparty_provider_clients",
      "client_type"
    ],
    "4778921.1": [
      "auth",
      "su_tenant_required_secondary_factors",
      "connection_uri_domain"
    ],
    "4778921.4": [
      "auth",
      "su_tenant_required_secondary_factors",
      "factor_id"
    ],
    "4778921.3": [
      "auth",
      "su_tenant_required_secondary_factors",
      "tenant_id"
    ],
    "4778921.2": [
      "auth",
      "su_tenant_required_secondary_factors",
      "app_id"
    ],
    "4778905.3": [
      "auth",
      "su_tenant_first_factors",
      "tenant_id"
    ],
    "4778905.1": [
      "auth",
      "su_tenant_first_factors",
      "connection_uri_domain"
    ],
    "4778905.2": [
      "auth",
      "su_tenant_first_factors",
      "app_id"
    ],
    "4778905.4": [
      "auth",
      "su_tenant_first_factors",
      "factor_id"
    ],
    "4778889.3": [
      "auth",
      "su_tenant_thirdparty_providers",
      "tenant_id"
    ],
    "4778889.5": [
      "auth",
      "su_tenant_thirdparty_providers",
      "name"
    ],
    "4778889.6": [
      "auth",
      "su_tenant_thirdparty_providers",
      "authorization_endpoint"
    ],
    "4778889.7": [
      "auth",
      "su_tenant_thirdparty_providers",
      "authorization_endpoint_query_params"
    ],
    "4778889.8": [
      "auth",
      "su_tenant_thirdparty_providers",
      "token_endpoint"
    ],
    "4778889.9": [
      "auth",
      "su_tenant_thirdparty_providers",
      "token_endpoint_body_params"
    ],
    "4778889.10": [
      "auth",
      "su_tenant_thirdparty_providers",
      "user_info_endpoint"
    ],
    "4778889.11": [
      "auth",
      "su_tenant_thirdparty_providers",
      "user_info_endpoint_query_params"
    ],
    "4778889.12": [
      "auth",
      "su_tenant_thirdparty_providers",
      "user_info_endpoint_headers"
    ],
    "4778889.13": [
      "auth",
      "su_tenant_thirdparty_providers",
      "jwks_uri"
    ],
    "4778889.14": [
      "auth",
      "su_tenant_thirdparty_providers",
      "oidc_discovery_endpoint"
    ],
    "4778889.15": [
      "auth",
      "su_tenant_thirdparty_providers",
      "require_email"
    ],
    "4778889.16": [
      "auth",
      "su_tenant_thirdparty_providers",
      "user_info_map_from_id_token_payload_user_id"
    ],
    "4778889.17": [
      "auth",
      "su_tenant_thirdparty_providers",
      "user_info_map_from_id_token_payload_email"
    ],
    "4778889.18": [
      "auth",
      "su_tenant_thirdparty_providers",
      "user_info_map_from_id_token_payload_email_verified"
    ],
    "4778889.19": [
      "auth",
      "su_tenant_thirdparty_providers",
      "user_info_map_from_user_info_endpoint_user_id"
    ],
    "4778889.20": [
      "auth",
      "su_tenant_thirdparty_providers",
      "user_info_map_from_user_info_endpoint_email"
    ],
    "4778889.21": [
      "auth",
      "su_tenant_thirdparty_providers",
      "user_info_map_from_user_info_endpoint_email_verified"
    ],
    "4778889.1": [
      "auth",
      "su_tenant_thirdparty_providers",
      "connection_uri_domain"
    ],
    "4778889.2": [
      "auth",
      "su_tenant_thirdparty_providers",
      "app_id"
    ],
    "4778889.4": [
      "auth",
      "su_tenant_thirdparty_providers",
      "third_party_id"
    ],
    "4778879.4": [
      "auth",
      "su_tenant_configs",
      "core_config"
    ],
    "4778879.5": [
      "auth",
      "su_tenant_configs",
      "email_password_enabled"
    ],
    "4778879.3": [
      "auth",
      "su_tenant_configs",
      "tenant_id"
    ],
    "4778879.2": [
      "auth",
      "su_tenant_configs",
      "app_id"
    ],
    "4778879.6": [
      "auth",
      "su_tenant_configs",
      "passwordless_enabled"
    ],
    "4778879.7": [
      "auth",
      "su_tenant_configs",
      "third_party_enabled"
    ],
    "4778879.8": [
      "auth",
      "su_tenant_configs",
      "is_first_factors_null"
    ],
    "4778879.1": [
      "auth",
      "su_tenant_configs",
      "connection_uri_domain"
    ],
    "4778862.2": [
      "auth",
      "su_session_info",
      "tenant_id"
    ],
    "4778862.7": [
      "auth",
      "su_session_info",
      "expires_at"
    ],
    "4778862.10": [
      "auth",
      "su_session_info",
      "use_static_key"
    ],
    "4778862.1": [
      "auth",
      "su_session_info",
      "app_id"
    ],
    "4778862.4": [
      "auth",
      "su_session_info",
      "user_id"
    ],
    "4778862.5": [
      "auth",
      "su_session_info",
      "refresh_token_hash_2"
    ],
    "4778862.6": [
      "auth",
      "su_session_info",
      "session_data"
    ],
    "4778862.8": [
      "auth",
      "su_session_info",
      "created_at_time"
    ],
    "4778862.3": [
      "auth",
      "su_session_info",
      "session_handle"
    ],
    "4778862.9": [
      "auth",
      "su_session_info",
      "jwt_user_payload"
    ],
    "4778848.1": [
      "auth",
      "su_session_access_token_signing_keys",
      "app_id"
    ],
    "4778848.2": [
      "auth",
      "su_session_access_token_signing_keys",
      "created_at_time"
    ],
    "4778848.3": [
      "auth",
      "su_session_access_token_signing_keys",
      "value"
    ],
    "4778835.1": [
      "auth",
      "su_user_last_active",
      "app_id"
    ],
    "4778835.2": [
      "auth",
      "su_user_last_active",
      "user_id"
    ],
    "4778835.3": [
      "auth",
      "su_user_last_active",
      "last_active_time"
    ],
    "4778806.1": [
      "auth",
      "su_all_auth_recipe_users",
      "app_id"
    ],
    "4778806.2": [
      "auth",
      "su_all_auth_recipe_users",
      "tenant_id"
    ],
    "4778806.6": [
      "auth",
      "su_all_auth_recipe_users",
      "recipe_id"
    ],
    "4778806.4": [
      "auth",
      "su_all_auth_recipe_users",
      "primary_or_recipe_user_id"
    ],
    "4778806.8": [
      "auth",
      "su_all_auth_recipe_users",
      "primary_or_recipe_user_time_joined"
    ],
    "4778806.3": [
      "auth",
      "su_all_auth_recipe_users",
      "user_id"
    ],
    "4778806.5": [
      "auth",
      "su_all_auth_recipe_users",
      "is_linked_or_is_a_primary_user"
    ],
    "4778806.7": [
      "auth",
      "su_all_auth_recipe_users",
      "time_joined"
    ],
    "4778786.2": [
      "auth",
      "su_app_id_to_user_id",
      "user_id"
    ],
    "4778786.1": [
      "auth",
      "su_app_id_to_user_id",
      "app_id"
    ],
    "4778786.4": [
      "auth",
      "su_app_id_to_user_id",
      "primary_or_recipe_user_id"
    ],
    "4778786.3": [
      "auth",
      "su_app_id_to_user_id",
      "recipe_id"
    ],
    "4778786.5": [
      "auth",
      "su_app_id_to_user_id",
      "is_linked_or_is_a_primary_user"
    ],
    "4778771.1": [
      "auth",
      "su_key_value",
      "app_id"
    ],
    "4778771.2": [
      "auth",
      "su_key_value",
      "tenant_id"
    ],
    "4778771.3": [
      "auth",
      "su_key_value",
      "name"
    ],
    "4778771.4": [
      "auth",
      "su_key_value",
      "value"
    ],
    "4778771.5": [
      "auth",
      "su_key_value",
      "created_at_time"
    ],
    "4778758.1": [
      "auth",
      "su_tenants",
      "app_id"
    ],
    "4778758.2": [
      "auth",
      "su_tenants",
      "tenant_id"
    ],
    "4778758.3": [
      "auth",
      "su_tenants",
      "created_at_time"
    ],
    "4778752.2": [
      "auth",
      "su_apps",
      "created_at_time"
    ],
    "4778752.1": [
      "auth",
      "su_apps",
      "app_id"
    ],
    "1276851.2": [
      "public",
      "enrichment_data",
      "entity_id"
    ],
    "1276851.3": [
      "public",
      "enrichment_data",
      "created_at"
    ],
    "1276851.1": [
      "public",
      "enrichment_data",
      "id"
    ],
    "1276851.4": [
      "public",
      "enrichment_data",
      "website_to_logo"
    ],
    "1276851.5": [
      "public",
      "enrichment_data",
      "logo_enrich_error"
    ],
    "1276851.6": [
      "public",
      "enrichment_data",
      "embedding"
    ],
    "1276851.7": [
      "public",
      "enrichment_data",
      "embedding_extra"
    ],
    "1276830.2": [
      "public",
      "deal_investors",
      "deal_id"
    ],
    "1276830.3": [
      "public",
      "deal_investors",
      "investor_id"
    ],
    "1276830.4": [
      "public",
      "deal_investors",
      "created_at"
    ],
    "1276830.1": [
      "public",
      "deal_investors",
      "id"
    ],
    "1276809.1": [
      "public",
      "deals",
      "id"
    ],
    "1276809.2": [
      "public",
      "deals",
      "dump_id"
    ],
    "1276809.11": [
      "public",
      "deals",
      "pb_deal_size"
    ],
    "1276809.9": [
      "public",
      "deals",
      "pb_type3"
    ],
    "1276809.8": [
      "public",
      "deals",
      "pb_type2"
    ],
    "1276809.6": [
      "public",
      "deals",
      "pb_investor_count"
    ],
    "1276809.5": [
      "public",
      "deals",
      "created_at"
    ],
    "1276809.4": [
      "public",
      "deals",
      "deal_type"
    ],
    "1276809.12": [
      "public",
      "deals",
      "deal_date"
    ],
    "1276809.7": [
      "public",
      "deals",
      "pb_type"
    ],
    "1276809.10": [
      "public",
      "deals",
      "pb_status"
    ],
    "1276809.13": [
      "public",
      "deals",
      "amount"
    ],
    "1276809.3": [
      "public",
      "deals",
      "sell_side_id"
    ],
    "949265.1": [
      "public",
      "people_roles",
      "id"
    ],
    "949265.8": [
      "public",
      "people_roles",
      "email"
    ],
    "949265.2": [
      "public",
      "people_roles",
      "person_id"
    ],
    "949265.3": [
      "public",
      "people_roles",
      "entity_id"
    ],
    "949265.4": [
      "public",
      "people_roles",
      "role"
    ],
    "949265.7": [
      "public",
      "people_roles",
      "created_at"
    ],
    "949265.5": [
      "public",
      "people_roles",
      "current"
    ],
    "949265.9": [
      "public",
      "people_roles",
      "source"
    ],
    "949243.3": [
      "public",
      "people_educational_institutions",
      "educational_institution_id"
    ],
    "949243.1": [
      "public",
      "people_educational_institutions",
      "id"
    ],
    "949243.2": [
      "public",
      "people_educational_institutions",
      "person_id"
    ],
    "949243.4": [
      "public",
      "people_educational_institutions",
      "created_at"
    ],
    "949225.3": [
      "public",
      "people",
      "full_name"
    ],
    "949225.14": [
      "public",
      "people",
      "source"
    ],
    "949225.13": [
      "public",
      "people",
      "resolvers"
    ],
    "949225.12": [
      "public",
      "people",
      "created_at"
    ],
    "949225.11": [
      "public",
      "people",
      "role_count"
    ],
    "949225.10": [
      "public",
      "people",
      "biography"
    ],
    "949225.8": [
      "public",
      "people",
      "linkedin_url"
    ],
    "949225.1": [
      "public",
      "people",
      "id"
    ],
    "949225.9": [
      "public",
      "people",
      "primary_email"
    ],
    "949225.7": [
      "public",
      "people",
      "gender"
    ],
    "949225.6": [
      "public",
      "people",
      "last_name"
    ],
    "949225.5": [
      "public",
      "people",
      "middle_name"
    ],
    "949225.4": [
      "public",
      "people",
      "first_name"
    ],
    "949225.2": [
      "public",
      "people",
      "dump_id"
    ],
    "949214.1": [
      "public",
      "educational_institutions",
      "id"
    ],
    "949214.3": [
      "public",
      "educational_institutions",
      "created_at"
    ],
    "949214.2": [
      "public",
      "educational_institutions",
      "name"
    ],
    "591071.1": [
      "public",
      "pb_person_dump",
      "id"
    ],
    "591071.4": [
      "public",
      "pb_person_dump",
      "created_at"
    ],
    "591071.3": [
      "public",
      "pb_person_dump",
      "person_ob"
    ],
    "591071.5": [
      "public",
      "pb_person_dump",
      "resolvers"
    ],
    "591071.2": [
      "public",
      "pb_person_dump",
      "pb_person_id"
    ],
    "471234.2": [
      "public",
      "pb_deal_dump",
      "pb_deal_id"
    ],
    "471234.5": [
      "public",
      "pb_deal_dump",
      "resolvers"
    ],
    "471234.3": [
      "public",
      "pb_deal_dump",
      "deal_ob"
    ],
    "471234.4": [
      "public",
      "pb_deal_dump",
      "created_at"
    ],
    "471234.1": [
      "public",
      "pb_deal_dump",
      "id"
    ],
    "358808.2": [
      "public",
      "entity_types_relations_other",
      "entity_id"
    ],
    "358808.3": [
      "public",
      "entity_types_relations_other",
      "entity_type_id"
    ],
    "358808.1": [
      "public",
      "entity_types_relations_other",
      "id"
    ],
    "358808.4": [
      "public",
      "entity_types_relations_other",
      "created_at"
    ],
    "358778.4": [
      "public",
      "entity_addresses_other",
      "is_hq"
    ],
    "358778.2": [
      "public",
      "entity_addresses_other",
      "entity_id"
    ],
    "358778.1": [
      "public",
      "entity_addresses_other",
      "id"
    ],
    "358778.3": [
      "public",
      "entity_addresses_other",
      "address_id"
    ],
    "358778.5": [
      "public",
      "entity_addresses_other",
      "created_at"
    ],
    "358730.2": [
      "public",
      "entities",
      "dump_id"
    ],
    "358730.4": [
      "public",
      "entities",
      "description"
    ],
    "358730.5": [
      "public",
      "entities",
      "status"
    ],
    "358730.8": [
      "public",
      "entities",
      "resolvers"
    ],
    "358730.9": [
      "public",
      "entities",
      "created_at"
    ],
    "358730.11": [
      "public",
      "entities",
      "year_founded"
    ],
    "358730.12": [
      "public",
      "entities",
      "dummy_col"
    ],
    "358730.13": [
      "public",
      "entities",
      "investment_count"
    ],
    "358730.14": [
      "public",
      "entities",
      "logo_path"
    ],
    "358730.15": [
      "public",
      "entities",
      "linkedin_url"
    ],
    "358730.24": [
      "public",
      "entities",
      "inv_portfolio_entity_keyword_count"
    ],
    "358730.26": [
      "public",
      "entities",
      "sell_side_portfolio_keyword_resolved_temp"
    ],
    "358730.27": [
      "public",
      "entities",
      "sell_side_portfolio_country_resolved_temp"
    ],
    "358730.28": [
      "public",
      "entities",
      "sell_side_portfolio_industry_resolved_temp"
    ],
    "358730.30": [
      "public",
      "entities",
      "is_lp"
    ],
    "358730.31": [
      "public",
      "entities",
      "is_company"
    ],
    "358730.33": [
      "public",
      "entities",
      "domain"
    ],
    "358730.32": [
      "public",
      "entities",
      "source"
    ],
    "358730.6": [
      "public",
      "entities",
      "entity_type_id"
    ],
    "358730.19": [
      "public",
      "entities",
      "inv_sec_pref_count"
    ],
    "358730.21": [
      "public",
      "entities",
      "last_inv_date"
    ],
    "358730.29": [
      "public",
      "entities",
      "is_investor"
    ],
    "358730.20": [
      "public",
      "entities",
      "last_funding_date"
    ],
    "358730.1": [
      "public",
      "entities",
      "id"
    ],
    "358730.18": [
      "public",
      "entities",
      "inv_geo_pref_count"
    ],
    "358730.25": [
      "public",
      "entities",
      "keyword_count"
    ],
    "358730.23": [
      "public",
      "entities",
      "inv_portfolio_entity_count"
    ],
    "358730.10": [
      "public",
      "entities",
      "website_primary"
    ],
    "358730.3": [
      "public",
      "entities",
      "name"
    ],
    "358730.7": [
      "public",
      "entities",
      "global_hq_address_id"
    ],
    "358706.1": [
      "public",
      "addresses",
      "id"
    ],
    "358706.13": [
      "public",
      "addresses",
      "state_id_new"
    ],
    "358706.7": [
      "public",
      "addresses",
      "country_id"
    ],
    "358706.8": [
      "public",
      "addresses",
      "super_region_id"
    ],
    "358706.3": [
      "public",
      "addresses",
      "line2"
    ],
    "358706.5": [
      "public",
      "addresses",
      "zip"
    ],
    "358706.9": [
      "public",
      "addresses",
      "created_at"
    ],
    "358706.4": [
      "public",
      "addresses",
      "city"
    ],
    "358706.10": [
      "public",
      "addresses",
      "city_id"
    ],
    "358706.12": [
      "public",
      "addresses",
      "city_id_new"
    ],
    "358706.2": [
      "public",
      "addresses",
      "line1"
    ],
    "358706.11": [
      "public",
      "addresses",
      "state_name_temp"
    ],
    "358706.6": [
      "public",
      "addresses",
      "state_id"
    ],
    "358695.3": [
      "public",
      "geo_super_regions",
      "created_at"
    ],
    "358695.2": [
      "public",
      "geo_super_regions",
      "name"
    ],
    "358695.1": [
      "public",
      "geo_super_regions",
      "id"
    ],
    "358684.5": [
      "public",
      "geo_countries",
      "dial_code"
    ],
    "358684.1": [
      "public",
      "geo_countries",
      "id"
    ],
    "358684.3": [
      "public",
      "geo_countries",
      "created_at"
    ],
    "358684.2": [
      "public",
      "geo_countries",
      "name"
    ],
    "358684.4": [
      "public",
      "geo_countries",
      "country_code"
    ],
    "358673.1": [
      "public",
      "geo_states",
      "id"
    ],
    "358673.6": [
      "public",
      "geo_states",
      "address_count_new"
    ],
    "358673.4": [
      "public",
      "geo_states",
      "address_count"
    ],
    "358673.3": [
      "public",
      "geo_states",
      "created_at"
    ],
    "358673.2": [
      "public",
      "geo_states",
      "name"
    ],
    "358673.5": [
      "public",
      "geo_states",
      "country_id"
    ],
    "358662.2": [
      "public",
      "entity_types",
      "name"
    ],
    "358662.1": [
      "public",
      "entity_types",
      "id"
    ],
    "358662.3": [
      "public",
      "entity_types",
      "created_at"
    ],
    "16505.9": [
      "public",
      "pb_dump",
      "vert_res"
    ],
    "16505.12": [
      "public",
      "pb_dump",
      "cos_valuation_done"
    ],
    "16505.13": [
      "public",
      "pb_dump",
      "cos_keywords_done"
    ],
    "16505.10": [
      "public",
      "pb_dump",
      "cos_indus_done"
    ],
    "16505.2": [
      "public",
      "pb_dump",
      "created_at"
    ],
    "16505.11": [
      "public",
      "pb_dump",
      "lp_ob"
    ],
    "16505.6": [
      "public",
      "pb_dump",
      "resolvers"
    ],
    "16505.4": [
      "public",
      "pb_dump",
      "investor_ob"
    ],
    "16505.7": [
      "public",
      "pb_dump",
      "company_ob"
    ],
    "16505.3": [
      "public",
      "pb_dump",
      "pbid"
    ],
    "16505.1": [
      "public",
      "pb_dump",
      "id"
    ],
    "16505.8": [
      "public",
      "pb_dump",
      "indus_res"
    ]
  },
  "tidToName": {
    "16505": [
      "public",
      "pb_dump"
    ],
    "358662": [
      "public",
      "entity_types"
    ],
    "358673": [
      "public",
      "geo_states"
    ],
    "358684": [
      "public",
      "geo_countries"
    ],
    "358695": [
      "public",
      "geo_super_regions"
    ],
    "358706": [
      "public",
      "addresses"
    ],
    "358730": [
      "public",
      "entities"
    ],
    "358778": [
      "public",
      "entity_addresses_other"
    ],
    "358808": [
      "public",
      "entity_types_relations_other"
    ],
    "471234": [
      "public",
      "pb_deal_dump"
    ],
    "591071": [
      "public",
      "pb_person_dump"
    ],
    "949214": [
      "public",
      "educational_institutions"
    ],
    "949225": [
      "public",
      "people"
    ],
    "949243": [
      "public",
      "people_educational_institutions"
    ],
    "949265": [
      "public",
      "people_roles"
    ],
    "1276809": [
      "public",
      "deals"
    ],
    "1276830": [
      "public",
      "deal_investors"
    ],
    "1276851": [
      "public",
      "enrichment_data"
    ],
    "4778752": [
      "auth",
      "su_apps"
    ],
    "4778758": [
      "auth",
      "su_tenants"
    ],
    "4778771": [
      "auth",
      "su_key_value"
    ],
    "4778786": [
      "auth",
      "su_app_id_to_user_id"
    ],
    "4778806": [
      "auth",
      "su_all_auth_recipe_users"
    ],
    "4778835": [
      "auth",
      "su_user_last_active"
    ],
    "4778848": [
      "auth",
      "su_session_access_token_signing_keys"
    ],
    "4778862": [
      "auth",
      "su_session_info"
    ],
    "4778879": [
      "auth",
      "su_tenant_configs"
    ],
    "4778889": [
      "auth",
      "su_tenant_thirdparty_providers"
    ],
    "4778905": [
      "auth",
      "su_tenant_first_factors"
    ],
    "4778921": [
      "auth",
      "su_tenant_required_secondary_factors"
    ],
    "4778937": [
      "auth",
      "su_tenant_thirdparty_provider_clients"
    ],
    "4778954": [
      "auth",
      "su_emailpassword_users"
    ],
    "4778968": [
      "auth",
      "su_emailpassword_user_to_tenant"
    ],
    "4778983": [
      "auth",
      "su_emailpassword_pswd_reset_tokens"
    ],
    "4778998": [
      "auth",
      "su_emailverification_verified_emails"
    ],
    "4779010": [
      "auth",
      "su_emailverification_tokens"
    ],
    "4779028": [
      "auth",
      "su_thirdparty_users"
    ],
    "4779043": [
      "auth",
      "su_thirdparty_user_to_tenant"
    ],
    "4779058": [
      "auth",
      "su_jwt_signing_keys"
    ],
    "4779072": [
      "auth",
      "su_passwordless_users"
    ],
    "4779091": [
      "auth",
      "su_passwordless_user_to_tenant"
    ],
    "4779111": [
      "auth",
      "su_passwordless_devices"
    ],
    "4779128": [
      "auth",
      "su_passwordless_codes"
    ],
    "4779144": [
      "auth",
      "su_user_metadata"
    ],
    "4779158": [
      "auth",
      "su_roles"
    ],
    "4779170": [
      "auth",
      "su_role_permissions"
    ],
    "4779185": [
      "auth",
      "su_user_roles"
    ],
    "4779202": [
      "auth",
      "su_userid_mapping"
    ],
    "4779220": [
      "auth",
      "su_dashboard_users"
    ],
    "4779236": [
      "auth",
      "su_dashboard_user_sessions"
    ],
    "4779249": [
      "auth",
      "su_totp_users"
    ],
    "4779261": [
      "auth",
      "su_totp_user_devices"
    ],
    "4779275": [
      "auth",
      "su_totp_used_codes"
    ],
    "4779295": [
      "auth",
      "su_bulk_import_users"
    ],
    "4779312": [
      "auth",
      "su_oauth_clients"
    ],
    "4779324": [
      "auth",
      "su_oauth_sessions"
    ],
    "4779343": [
      "auth",
      "su_oauth_m2m_tokens"
    ],
    "4779356": [
      "auth",
      "su_oauth_logout_challenges"
    ],
    "5699439": [
      "public",
      "pb_indus"
    ],
    "5699453": [
      "public",
      "pb_vert"
    ],
    "7271193": [
      "public",
      "emails"
    ],
    "7541113": [
      "public",
      "entity_investment_preferences"
    ],
    "7541172": [
      "public",
      "stage_types"
    ],
    "7541184": [
      "public",
      "industries"
    ],
    "7541285": [
      "public",
      "entity_pb_indus_pref"
    ],
    "7541306": [
      "public",
      "entity_stage_pref"
    ],
    "7541326": [
      "public",
      "pb_other_preferences"
    ],
    "7541337": [
      "public",
      "entity_pb_other_pref"
    ],
    "7541361": [
      "public",
      "entity_state_pref"
    ],
    "7541381": [
      "public",
      "geo_state_groups"
    ],
    "7541392": [
      "public",
      "geo_state_group_states"
    ],
    "7541412": [
      "public",
      "entity_state_group_pref"
    ],
    "7541462": [
      "public",
      "entity_country_pref"
    ],
    "7541482": [
      "public",
      "entity_continent_pref"
    ],
    "7880626": [
      "public",
      "entity_industry_pref"
    ],
    "9008998": [
      "public",
      "saved_searches"
    ],
    "9197459": [
      "public",
      "user_preferences"
    ],
    "9851137": [
      "public",
      "entity_company_details"
    ],
    "9851251": [
      "public",
      "llm_chat"
    ],
    "9851325": [
      "public",
      "cb_dump"
    ],
    "11389759": [
      "public",
      "cb_contacts_dump"
    ],
    "11389770": [
      "public",
      "cb_people_dump"
    ],
    "11482634": [
      "public",
      "cb_deal_dump"
    ],
    "11597985": [
      "public",
      "cb_mna_dump"
    ],
    "11671864": [
      "public",
      "entity_keywords"
    ],
    "11671915": [
      "public",
      "keywords"
    ],
    "11671958": [
      "public",
      "company_industries"
    ],
    "11728541": [
      "public",
      "fund_types"
    ],
    "11728551": [
      "public",
      "lp_types"
    ],
    "11728561": [
      "public",
      "entity_lp_details"
    ],
    "11728573": [
      "public",
      "entity_lp_types"
    ],
    "11728592": [
      "public",
      "entity_lp_fund_type_pref"
    ],
    "11728623": [
      "public",
      "entity_scraping"
    ],
    "11733081": [
      "public",
      "lists"
    ],
    "12091532": [
      "public",
      "list_entity_ids"
    ],
    "12978241": [
      "public",
      "portfolio_keywords"
    ],
    "12978533": [
      "public",
      "llm_messages_bug"
    ],
    "12978559": [
      "public",
      "portfolio_countries"
    ],
    "12978580": [
      "public",
      "portfolio_industries"
    ],
    "12979127": [
      "auth",
      "su_webauthn_users"
    ],
    "12979140": [
      "auth",
      "su_webauthn_user_to_tenant"
    ],
    "12979155": [
      "auth",
      "su_webauthn_generated_options"
    ],
    "12979172": [
      "auth",
      "su_webauthn_credentials"
    ],
    "12979186": [
      "auth",
      "su_webauthn_account_recovery_tokens"
    ],
    "12979602": [
      "public",
      "llm_messages"
    ],
    "12979651": [
      "public",
      "list_people_ids"
    ],
    "12979805": [
      "public",
      "data_source"
    ],
    "12979919": [
      "public",
      "me_firms"
    ],
    "12979930": [
      "public",
      "me_contacts"
    ],
    "12979972": [
      "public",
      "me_geo"
    ],
    "12979979": [
      "public",
      "me_sectors"
    ],
    "12991426": [
      "public",
      "api_logs"
    ],
    "12991441": [
      "public",
      "rate_limit_tiers"
    ],
    "12991451": [
      "public",
      "user_meta"
    ],
    "13000448": [
      "public",
      "organizations"
    ],
    "13000463": [
      "public",
      "organization_members"
    ],
    "13000493": [
      "public",
      "organization_invitations"
    ],
    "13000668": [
      "public",
      "geo_cities"
    ],
    "13002134": [
      "public",
      "city_country_temp"
    ],
    "13002584": [
      "public",
      "subscription_products"
    ],
    "13002596": [
      "public",
      "subscription_plans"
    ],
    "13002808": [
      "public",
      "unlocked_contacts"
    ],
    "13003347": [
      "public",
      "domains"
    ],
    "13049143": [
      "public",
      "subscriptions"
    ],
    "13049162": [
      "public",
      "webhook_logs"
    ],
    "13049172": [
      "public",
      "designations"
    ],
    "13049179": [
      "public",
      "people_role_designations"
    ],
    "13049248": [
      "public",
      "subscription_invoice"
    ],
    "13049372": [
      "public",
      "agent_prompt"
    ],
    "13049489": [
      "public",
      "user_exports"
    ]
  }
}