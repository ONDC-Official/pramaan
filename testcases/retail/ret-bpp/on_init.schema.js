// max id - 136 provider, items, quote, cancellation_terms, billing, fulfillments, payment, tags
module.exports = {
    "id": "retail_bpp_on_init_message_01",
    "type": "object",
    "properties": {
        "order": {
            "id": "retail_bpp_on_init_message_02",
            "type": "object",
            "properties": {
                "provider": {
                    "id": "retail_bpp_on_init_message_03",
                    "type": "object",
                    "properties": {
                        "id": {
                            "id": "retail_bpp_on_init_message_04",
                            "type": "string",
                            "minLength": 1
                        },
                        "locations": {
                            "id": "retail_bpp_on_init_message_05",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bpp_on_init_message_06",
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "id": "retail_bpp_on_init_message_07",
                                        "type": "string",
                                        "minLength": 1
                                    }
                                }
                            }
                        }
                    }
                },
                "items": {
                    "id": "retail_bpp_on_init_message_08",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bpp_on_init_message_09",
                        "type": "object",
                        "properties": {
                            "id": {
                                "id": "retail_bpp_on_init_message_10",
                                "type": "string",
                                "minLength": 1
                            },
                            "parent_item_id": {
                                "id": "retail_bpp_on_init_message_113",
                                "type": "string"
                            },
                            "quantity": {
                                "id": "retail_bpp_on_init_message_11",
                                "type": "object",
                                "properties": {
                                    "count": {
                                        "id": "retail_bpp_on_init_message_12",
                                        "type": "number"
                                    }
                                }
                            },
                            "fulfillment_id": {
                                "id": "retail_bpp_on_init_message_13",
                                "type": "string",
                                "minLength": 1
                            },
                            "tags": {
                                "id": "retail_bpp_on_init_message_127",
                                "type": "array",
                                "minItems": 1,
                                "element": {
                                    "id": "retail_bpp_on_init_message_128",
                                    "type": "object",
                                    "properties": {
                                        "code": {
                                            "id": "retail_bpp_on_init_message_129",
                                            "type": "string",
                                            "enums": ["parent", "type"]
                                        },
                                        "list": {
                                            "id": "retail_bpp_on_init_message_130",
                                            "minItems": 1,
                                            "element": {
                                                "allOf": [
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "type"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "id": "retail_bpp_on_init_message_131",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bpp_on_init_message_132",
                                                                    "type": "string",
                                                                    "enum": ["type"]
                                                                },
                                                                "value": {
                                                                    "id": "retail_bpp_on_init_message_133",
                                                                    "type": "string",
                                                                    "enum": ["item", "customization"]
                                                                }
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "id"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "id": "retail_bpp_on_init_message_134",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bpp_on_init_message_135",
                                                                    "type": "string",
                                                                    "enum": ["id"]
                                                                },
                                                                "value": {
                                                                    "id": "retail_bpp_on_init_message_136",
                                                                    "type": "string"
                                                                }
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "required": {
                            "type": "array",
                            "element": {
                                "allOf": [
                                    {
                                        "if": {
                                            "properties": {
                                                "type": "params",
                                                "domain": {
                                                    "const": [
                                                        "ONDC:RET10",
                                                        "ONDC:RET12",
                                                        "ONDC:RET13",
                                                        "ONDC:RET14",
                                                        "ONDC:RET15",
                                                        "ONDC:RET16",
                                                        "ONDC:RET17",
                                                        "ONDC:RET18",
                                                        "ONDC:RET19",
                                                        "ONDC:RET1A",
                                                        "ONDC:RET1B",
                                                        "ONDC:RET1C",
                                                        "ONDC:RET1D"
                                                    ]
                                                }
                                            }
                                        },
                                        "then": [
                                            "id",
                                            "quantity",
                                            "fulfillment_id"
                                        ]
                                    },
                                    {
                                        "if": {
                                            "properties": {
                                                "type": "params",
                                                "domain": {
                                                    "const": [
                                                        "ONDC:RET11"
                                                    ]
                                                }
                                            }
                                        },
                                        "then": [
                                            "id",
                                            "quantity",
                                            "fulfillment_id",
                                            "parent_item_id",
                                            "tags"
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "quote": {
                    "id": "retail_bpp_on_init_message_14",
                    "type": "object",
                    "properties": {
                        "price": {
                            "id": "retail_bpp_on_init_message_15",
                            "type": "object",
                            "properties": {
                                "currency": {
                                    "id": "retail_bpp_on_init_message_16",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "value": {
                                    "id": "retail_bpp_on_init_message_17",
                                    "type": "string",
                                    "minLength": 1,
                                    "compliance": "price",
                                    "errorMessage": "should have two places of decimal"
                                }
                            }
                        },
                        "breakup": {
                            "id": "retail_bpp_on_init_message_18",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bpp_on_init_message_19",
                                "type": "object",
                                "properties": {
                                    "@ondc/org/item_id": {
                                        "id": "retail_bpp_on_init_message_20",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "title": {
                                        "id": "retail_bpp_on_init_message_21",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "@ondc/org/item_quantity": {
                                        "id": "retail_bpp_on_init_message_22",
                                        "type": "object",
                                        "properties": {
                                            "count": {
                                                "id": "retail_bpp_on_init_message_23",
                                                "type": "number"
                                            }
                                        }
                                    },
                                    "@ondc/org/title_type": {
                                        "id": "retail_bpp_on_init_message_24",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "price": {
                                        "id": "retail_bpp_on_init_message_25",
                                        "type": "object",
                                        "properties": {
                                            "currency": {
                                                "id": "retail_bpp_on_init_message_26",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "value": {
                                                "id": "retail_bpp_on_init_message_27",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "item": {
                                        "id": "retail_bpp_on_init_message_28",
                                        "type": "object",
                                        "properties": {
                                            "parent_item_id": {
                                                "id": "retail_bpp_on_init_message_29",
                                                "type": "string"
                                            },
                                            "price": {
                                                "id": "retail_bpp_on_init_message_34",
                                                "type": "object",
                                                "properties": {
                                                    "currency": {
                                                        "id": "retail_bpp_on_init_message_35",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "value": {
                                                        "id": "retail_bpp_on_init_message_36",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            },
                                            "tags": {
                                                "id": "retail_bpp_on_init_message_113",
                                                "type": "array",
                                                "element": {
                                                    "id": "retail_bpp_on_init_message_114",
                                                    "type": "object",
                                                    "properties": {
                                                        "code": {
                                                            "id": "retail_bpp_on_init_message_115",
                                                            "type": "string",
                                                            "enum": [
                                                                "type",
                                                                "parent",
                                                                "child",
                                                                "origin",
                                                                "veg_nonveg",
                                                                "custom_group"
                                                            ]
                                                        },
                                                        "list": {
                                                            "id": "retail_bpp_on_init_message_116",
                                                            "type": "array",
                                                            "minItems": 1,
                                                            "element": {
                                                                "allOf": [
                                                                    {
                                                                        "if": {
                                                                            "properties": {
                                                                                "code": {
                                                                                    "const": "type"
                                                                                }
                                                                            }
                                                                        },
                                                                        "then": {
                                                                            "type": "object",
                                                                            "properties": {
                                                                                "code": {
                                                                                    "id": "retail_bpp_on_init_message_117",
                                                                                    "type": "string",
                                                                                    "enum": ["type"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_init_message_118",
                                                                                    "type": "string",
                                                                                    "enum": ["item", "customization"]
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "if": {
                                                                            "properties": {
                                                                                "code": {
                                                                                    "const": "id"
                                                                                }
                                                                            }
                                                                        },
                                                                        "then": {
                                                                            "type": "object",
                                                                            "properties": {
                                                                                "code": {
                                                                                    "id": "retail_bpp_on_init_message_119",
                                                                                    "type": "string",
                                                                                    "enum": ["id"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_init_message_120",
                                                                                    "type": "string"
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "if": {
                                                                            "properties": {
                                                                                "code": {
                                                                                    "const": "country"
                                                                                }
                                                                            }
                                                                        },
                                                                        "then": {
                                                                            "type": "object",
                                                                            "properties": {
                                                                                "code": {
                                                                                    "id": "retail_bpp_on_init_message_121",
                                                                                    "type": "string",
                                                                                    "enum": ["country"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_init_message_122",
                                                                                    "type": "string",
                                                                                    "pattern": "^[A-Z]{3}$", "minLength": 1, "errorMessage": "Country must be in ISO 3166-1 format (three-letter country code)"
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "if": {
                                                                            "properties": {
                                                                                "code": {
                                                                                    "const": "veg"
                                                                                }
                                                                            }
                                                                        },
                                                                        "then": {
                                                                            "type": "object",
                                                                            "properties": {
                                                                                "code": {
                                                                                    "id": "retail_bpp_on_init_message_123",
                                                                                    "type": "string",
                                                                                    "enum": ["veg"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_init_message_124",
                                                                                    "type": "string",
                                                                                    "enum": ["yes", "no"]
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "if": {
                                                                            "properties": {
                                                                                "code": {
                                                                                    "const": "default"
                                                                                }
                                                                            }
                                                                        },
                                                                        "then": {
                                                                            "type": "object",
                                                                            "properties": {
                                                                                "code": {
                                                                                    "id": "retail_bpp_on_init_message_125",
                                                                                    "type": "string",
                                                                                    "enum": ["default"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_init_message_126",
                                                                                    "type": "string",
                                                                                    "enum": ["yes", "no"]
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    "required": [
                                                        "code",
                                                        "list"
                                                    ],
                                                    "additionalProperties": false
                                                }
                                            }
                                        },
                                        "required": {
                                            "type": "array",
                                            "element": {
                                                "allOf": [
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "type": "params",
                                                                "domain": {
                                                                    "const": [
                                                                        "ONDC:RET11"
                                                                    ]
                                                                }
                                                            }
                                                        },
                                                        "then": [
                                                            "parent_item_id",
                                                            "quantity",
                                                            "price",
                                                            "tags"
                                                        ]
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "type": "params",
                                                                "domain": {
                                                                    "const": [
                                                                        "ONDC:RET10",
                                                                        "ONDC:RET12",
                                                                        "ONDC:RET13",
                                                                        "ONDC:RET14",
                                                                        "ONDC:RET15",
                                                                        "ONDC:RET16",
                                                                        "ONDC:RET17",
                                                                        "ONDC:RET18",
                                                                        "ONDC:RET19",
                                                                        "ONDC:RET1A",
                                                                        "ONDC:RET1B",
                                                                        "ONDC:RET1C",
                                                                        "ONDC:RET1D"
                                                                    ]
                                                                }
                                                            }
                                                        },
                                                        "then": [
                                                            "quantity",
                                                            "price"
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "required": {
                                    "type": "array",
                                    "element": {
                                        "allOf": [
                                            {
                                                "if": {
                                                    "properties": {
                                                        "@ondc/org/title_type": {
                                                            "const": "item"
                                                        }
                                                    }
                                                },
                                                "then": [
                                                    "@ondc/org/item_id",
                                                    "title",
                                                    "@ondc/org/item_quantity",
                                                    "@ondc/org/title_type",
                                                    "price",
                                                    "item"
                                                ]
                                            },
                                            {
                                                "if": {
                                                    "properties": {
                                                        "@ondc/org/title_type": {
                                                            "const": "delivery"
                                                        }
                                                    }
                                                },
                                                "then": [
                                                    "@ondc/org/item_id",
                                                    "@ondc/org/title_type",
                                                    "title",
                                                    "price"
                                                ]
                                            },
                                            {
                                                "if": {
                                                    "properties": {
                                                        "@ondc/org/title_type": {
                                                            "const": ["packing", "misc", "tax"]
                                                        }
                                                    }
                                                },
                                                "then": [
                                                    "@ondc/org/item_id",
                                                    "@ondc/org/title_type",
                                                    "title",
                                                    "price",
                                                ]
                                            },
                                            {
                                                "if": {
                                                    "properties": {
                                                        "@ondc/org/title_type": {
                                                            "const": ["tax"]
                                                        }
                                                    }
                                                },
                                                "then": [
                                                    "@ondc/org/item_id",
                                                    "@ondc/org/title_type",
                                                    "title",
                                                    "price",
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        "ttl": {
                            "id": "retail_bpp_on_init_message_43",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "cancellation_terms": {
                    "id": "retail_bpp_on_init_message_38",
                    "type": "array",
                    "optional": true,
                    "minItems": 1,
                    "element": {
                        "id": "retail_bpp_on_init_message_39",
                        "type": "object",
                        "properties": {
                            "fulfillment_state": {
                                "id": "retail_bpp_on_init_message_40",
                                "type": "object",
                                "properties": {
                                    "descriptor": {
                                        "id": "retail_bpp_on_init_message_41",
                                        "type": "object",
                                        "properties": {
                                            "code": {
                                                "id": "retail_bpp_on_init_message_42",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "short_desc": {
                                                "id": "retail_bpp_on_init_message_43",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    }
                                }
                            },
                            "refund_eligible": {
                                "id": "retail_bpp_on_init_message_44",
                                "type": "boolean"
                            },
                            "reason_required": {
                                "id": "retail_bpp_on_init_message_45",
                                "type": "boolean"
                            },
                            "cancellation_fee": {
                                "id": "retail_bpp_on_init_message_46",
                                "type": "object",
                                "properties": {
                                    "percentage": {
                                        "id": "retail_bpp_on_init_message_47",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "amount": {
                                        "id": "retail_bpp_on_init_message_48",
                                        "type": "object",
                                        "properties": {
                                            "currency": {
                                                "id": "retail_bpp_on_init_message_49",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "value": {
                                                "id": "retail_bpp_on_init_message_50",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "billing": {
                    "id": "retail_bpp_on_init_message_51",
                    "type": "object",
                    "properties": {
                        "name": {
                            "id": "retail_bpp_on_init_message_52",
                            "type": "string",
                            "minLength": 1
                        },
                        "address": {
                            "id": "retail_bpp_on_init_message_53",
                            "type": "object",
                            "properties": {
                                "name": {
                                    "id": "retail_bpp_on_init_message_54",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "building": {
                                    "id": "retail_bpp_on_init_message_55",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "locality": {
                                    "id": "retail_bpp_on_init_message_56",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "city": {
                                    "id": "retail_bpp_on_init_message_57",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "state": {
                                    "id": "retail_bpp_on_init_message_58",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "country": {
                                    "id": "retail_bpp_on_init_message_59",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "area_code": {
                                    "id": "retail_bpp_on_init_message_60",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "tax_number": {
                            "id": "retail_bpp_on_init_message_61",
                            "type": "string",
                            "minLength": 1
                        },
                        "phone": {
                            "id": "retail_bpp_on_init_message_62",
                            "type": "string",
                            "minLength": 1
                        },
                        "email": {
                            "id": "retail_bpp_on_init_message_63",
                            "type": "string",
                            "minLength": 1
                        },
                        "created_at": {
                            "id": "retail_bpp_on_init_message_64",
                            "type": "string",
                            "minLength": 1
                        },
                        "updated_at": {
                            "id": "retail_bpp_on_init_message_65",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "fulfillments": {
                    "id": "retail_bpp_on_init_message_66",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bpp_on_init_message_67",
                        "type": "object",
                        "properties": {
                            "id": {
                                "id": "retail_bpp_on_init_message_68",
                                "type": "string",
                                "minLength": 1
                            },
                            "type": {
                                "id": "retail_bpp_on_init_message_69",
                                "type": "string",
                                "minLength": 1
                            },
                            "end": {
                                "id": "retail_bpp_on_init_message_70",
                                "type": "object",
                                "properties": {
                                    "contact": {
                                        "id": "retail_bpp_on_init_message_71",
                                        "type": "object",
                                        "properties": {
                                            "phone": {
                                                "id": "retail_bpp_on_init_message_72",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "email": {
                                                "id": "retail_bpp_on_init_message_73",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "location": {
                                        "id": "retail_bpp_on_init_message_74",
                                        "type": "object",
                                        "properties": {
                                            "address": {
                                                "id": "retail_bpp_on_init_message_75",
                                                "type": "object",
                                                "properties": {
                                                    "area_code": {
                                                        "id": "retail_bpp_on_init_message_76",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "building": {
                                                        "id": "retail_bpp_on_init_message_77",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "city": {
                                                        "id": "retail_bpp_on_init_message_78",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "country": {
                                                        "id": "retail_bpp_on_init_message_79",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "locality": {
                                                        "id": "retail_bpp_on_init_message_80",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "name": {
                                                        "id": "retail_bpp_on_init_message_81",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "state": {
                                                        "id": "retail_bpp_on_init_message_82",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            },
                                            "gps": {
                                                "id": "retail_bpp_on_init_message_83",
                                                "type": "string",
                                                "minLength": 1,
                                                "compliance": "gps-coord"
                                            }
                                        }
                                    }
                                }
                            },
                            "tracking": {
                                "id": "retail_bpp_on_init_message_84",
                                "type": "boolean",
                                "enum": [true, false]
                            }
                        }
                    }
                },
                "payment": {
                    "id": "retail_bpp_on_init_message_85",
                    "type": "object",
                    "properties": {
                        "type": {
                            "id": "retail_bpp_on_init_message_86",
                            "type": "string",
                            "minLength": 1
                        },
                        "collected_by": {
                            "id": "retail_bpp_on_init_message_87",
                            "type": "string",
                            "minLength": 1
                        },
                        "@ondc/org/buyer_app_finder_fee_type": {
                            "id": "retail_bpp_on_init_message_88",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "@ondc/org/buyer_app_finder_fee_amount": {
                            "id": "retail_bpp_on_init_message_89",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "@ondc/org/settlement_basis": {
                            "id": "retail_bpp_on_init_message_90",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "@ondc/org/settlement_window": {
                            "id": "retail_bpp_on_init_message_91",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "@ondc/org/withholding_amount": {
                            "id": "retail_bpp_on_init_message_92",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "@ondc/org/settlement_details": {
                            "id": "retail_bpp_on_init_message_93",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bpp_on_init_message_94",
                                "type": "object",
                                "properties": {
                                    "settlement_counterparty": {
                                        "id": "retail_bpp_on_init_message_95",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "upi_address": {
                                        "id": "retail_bpp_on_init_message_96",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "beneficiary_name": {
                                        "id": "retail_bpp_on_init_message_97",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_type": {
                                        "id": "retail_bpp_on_init_message_98",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_bank_account_no": {
                                        "id": "retail_bpp_on_init_message_99",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_ifsc_code": {
                                        "id": "retail_bpp_on_init_message_100",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_phase": {
                                        "id": "retail_bpp_on_init_message_101",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_status": {
                                        "id": "retail_bpp_on_init_message_102",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "bank_name": {
                                        "id": "retail_bpp_on_init_message_103",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "branch_name": {
                                        "id": "retail_bpp_on_init_message_104",
                                        "type": "string",
                                        "minLength": 1
                                    }
                                }
                            }
                        },
                        "status": {
                            "id": "retail_bpp_on_init_message_105",
                            "type": "string",
                            "minLength": 1,
                            "enum": ["NOT-PAID"]
                        }
                    },
                    "required": {
                        "type": "array",
                        "element": {
                            "allOf": [
                                {
                                    "if": {
                                        "properties": {
                                            "type": "params",
                                            "flow": {
                                                "const": [
                                                    "RET_1b"
                                                ]
                                            }
                                        }
                                    },
                                    "then": [
                                        "type",
                                        "status",
                                        "collected_by",
                                        "@ondc/org/buyer_app_finder_fee_type",
                                        "@ondc/org/buyer_app_finder_fee_amount",
                                        "@ondc/org/settlement_basis",
                                        "@ondc/org/settlement_window",
                                        "@ondc/org/withholding_amount"
                                    ]
                                },
                                {
                                    "if": {
                                        "properties": {
                                            "type": "params",
                                            "flow": {
                                                "const": [
                                                    "RET_1",
                                                    "RET_3",
                                                    "RET_4",
                                                    "RET_4b",
                                                    "RET_4c",
                                                    "RET_5",
                                                    "RET_5b",
                                                    "RET_6",
                                                    "RET_7",
                                                    "RET_8",
                                                    "RET_9",
                                                    "RET_10",
                                                    "RET_11",
                                                    "RET_12",
                                                    "RET_13",
                                                    "RET_14",
                                                    "RET_15"
                                                ]
                                            }
                                        }
                                    },
                                    "then": [
                                        "type",
                                        "status",
                                        "collected_by",
                                        "@ondc/org/buyer_app_finder_fee_type",
                                        "@ondc/org/buyer_app_finder_fee_amount",
                                        "@ondc/org/settlement_details"
                                    ]
                                }
                            ]
                        }
                    }
                },
                "tags": {
                    "id": "retail_bpp_on_init_message_106",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bpp_on_init_message_107",
                        "type": "object",
                        "properties": {
                            "code": {
                                "id": "retail_bpp_on_init_message_108",
                                "type": "string",
                                "minLength": 1
                            },
                            "list": {
                                "id": "retail_bpp_on_init_message_109",
                                "type": "array",
                                "minItems": 1,
                                "element": {
                                    "id": "retail_bpp_on_init_message_110",
                                    "type": "object",
                                    "properties": {
                                        "code": {
                                            "id": "retail_bpp_on_init_message_111",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "value": {
                                            "id": "retail_bpp_on_init_message_112",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}