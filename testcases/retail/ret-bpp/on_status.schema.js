// max id - 152 id, state, provider, billing, quote, payment, tags, created_at
module.exports = {
    "id": "retail_bpp_on_status_message_01",
    "type": "object",
    "properties": {
        "order": {
            "id": "retail_bpp_on_status_message_02",
            "type": "object",
            "properties": {
                "id": {
                    "id": "retail_bpp_on_status_message_03",
                    "type": "string",
                    "minLength": 1
                },
                "state": {
                    "id": "retail_bpp_on_status_message_4",
                    "type": "string",
                    "minLength": 1,
                    "const": "orderState"
                },
                "provider": {
                    "id": "retail_bpp_on_status_message_5",
                    "type": "object",
                    "properties": {
                        "id": {
                            "id": "retail_bpp_on_status_message_6",
                            "type": "string",
                            "minLength": 1
                        },
                        "locations": {
                            "id": "retail_bpp_on_status_message_7",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bpp_on_status_message_8",
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "id": "retail_bpp_on_status_message_9",
                                        "type": "string",
                                        "minLength": 1
                                    }
                                }
                            }
                        }
                    }
                },
                "items": {
                    "id": "retail_bpp_on_status_message_10",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bpp_on_status_message_11",
                        "type": "object",
                        "properties": {
                            "id": {
                                "id": "retail_bpp_on_status_message_12",
                                "type": "string",
                                "minLength": 1
                            },
                            "quantity": {
                                "id": "retail_bpp_on_status_message_13",
                                "type": "object",
                                "properties": {
                                    "count": {
                                        "id": "retail_bpp_on_status_message_14",
                                        "type": "number"
                                    }
                                }
                            },
                            "fulfillment_id": {
                                "id": "retail_bpp_on_status_message_15",
                                "type": "string",
                                "minLength": 1
                            }
                        }
                    }
                },
                "billing": {
                    "id": "retail_bpp_on_status_message_16",
                    "type": "object",
                    "properties": {
                        "name": {
                            "id": "retail_bpp_on_status_message_17",
                            "type": "string",
                            "minLength": 1
                        },
                        "address": {
                            "id": "retail_bpp_on_status_message_18",
                            "type": "object",
                            "properties": {
                                "name": {
                                    "id": "retail_bpp_on_status_message_19",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "building": {
                                    "id": "retail_bpp_on_status_message_20",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "locality": {
                                    "id": "retail_bpp_on_status_message_21",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "city": {
                                    "id": "retail_bpp_on_status_message_22",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "state": {
                                    "id": "retail_bpp_on_status_message_23",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "country": {
                                    "id": "retail_bpp_on_status_message_24",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "area_code": {
                                    "id": "retail_bpp_on_status_message_25",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "tax_number": {
                            "id": "retail_bpp_on_status_message_26",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "phone": {
                            "id": "retail_bpp_on_status_message_27",
                            "type": "string",
                            "minLength": 1
                        },
                        "email": {
                            "id": "retail_bpp_on_status_message_28",
                            "type": "string",
                            "minLength": 1
                        },
                        "created_at": {
                            "id": "retail_bpp_on_status_message_29",
                            "type": "string",
                            "minLength": 1
                        },
                        "updated_at": {
                            "id": "retail_bpp_on_status_message_30",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "fulfillments": {
                    "id": "retail_bpp_on_status_message_31",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bpp_on_status_message_32",
                        "type": "object",
                        "properties": {
                            "id": {
                                "id": "retail_bpp_on_status_message_33",
                                "type": "string",
                                "minLength": 1
                            },
                            "@ondc/org/provider_name": {
                                "id": "retail_bpp_on_status_message_34",
                                "type": "string",
                                "minLength": 1
                            },
                            "@ondc/org/TAT": {
                                "id": "retail_bpp_on_status_message_36",
                                "type": "string",
                                "minLength": 1
                            },
                            "state": {
                                "id": "retail_bpp_on_status_message_37",
                                "type": "object",
                                "properties": {
                                    "descriptor": {
                                        "id": "retail_bpp_on_status_message_38",
                                        "type": "object",
                                        "properties": {
                                            "code": {
                                                "id": "retail_bpp_on_status_message_39",
                                                "type": "string",
                                                "minLength": 1,
                                                "const": "step"
                                            }
                                        }
                                    }
                                }
                            },
                            "type": {
                                "id": "retail_bpp_on_status_message_40",
                                "type": "string",
                                "minLength": 1
                            },
                            "tracking": {
                                "id": "retail_bpp_on_status_message_41",
                                "type": "boolean"
                            },
                            "start": {
                                "id": "retail_bpp_on_status_message_42",
                                "type": "object",
                                "properties": {
                                    "location": {
                                        "id": "retail_bpp_on_status_message_43",
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "id": "retail_bpp_on_status_message_44",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "gps": {
                                                "id": "retail_bpp_on_status_message_45",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "descriptor": {
                                                "id": "retail_bpp_on_status_message_46",
                                                "type": "object",
                                                "properties": {
                                                    "name": {
                                                        "id": "retail_bpp_on_status_message_47",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    // "images": {
                                                    //     "id": "retail_bpp_on_status_message_48",
                                                    //     "type": "array",
                                                    //     "minItems": 1,
                                                    //     "element": {
                                                    //         "id": "retail_bpp_on_status_message_49",
                                                    //         "type": "string",
                                                    //         "minLength": 1
                                                    //     }
                                                    // }
                                                }
                                            },
                                            "address": {
                                                "id": "retail_bpp_on_status_message_50",
                                                "type": "object",
                                                "properties": {
                                                    "locality": {
                                                        "id": "retail_bpp_on_status_message_51",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "city": {
                                                        "id": "retail_bpp_on_status_message_52",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "area_code": {
                                                        "id": "retail_bpp_on_status_message_53",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "state": {
                                                        "id": "retail_bpp_on_status_message_54",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "time": {
                                        "id": "retail_bpp_on_status_message_55",
                                        "type": "object",
                                        "properties": {
                                            "range": {
                                                "id": "retail_bpp_on_status_message_56",
                                                "type": "object",
                                                "properties": {
                                                    "start": {
                                                        "id": "retail_bpp_on_status_message_57",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "end": {
                                                        "id": "retail_bpp_on_status_message_58",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            },
                                            "timestamp": {
                                                "id": "retail_bpp_on_status_message_59",
                                                "type": "string",
                                                "minLength": 1,
                                                "optional": true,
                                            }
                                        }
                                    },
                                    "contact": {
                                        "id": "retail_bpp_on_status_message_60",
                                        "type": "object",
                                        "properties": {
                                            "phone": {
                                                "id": "retail_bpp_on_status_message_61",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "email": {
                                                "id": "retail_bpp_on_status_message_62",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    }
                                }
                            },
                            "end": {
                                "id": "retail_bpp_on_status_message_63",
                                "type": "object",
                                "properties": {
                                    "contact": {
                                        "id": "retail_bpp_on_status_message_64",
                                        "type": "object",
                                        "properties": {
                                            "email": {
                                                "id": "retail_bpp_on_status_message_65",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "phone": {
                                                "id": "retail_bpp_on_status_message_66",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "location": {
                                        "id": "retail_bpp_on_status_message_67",
                                        "type": "object",
                                        "properties": {
                                            "address": {
                                                "id": "retail_bpp_on_status_message_68",
                                                "type": "object",
                                                "properties": {
                                                    "area_code": {
                                                        "id": "retail_bpp_on_status_message_69",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "building": {
                                                        "id": "retail_bpp_on_status_message_70",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "city": {
                                                        "id": "retail_bpp_on_status_message_71",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "country": {
                                                        "id": "retail_bpp_on_status_message_72",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "locality": {
                                                        "id": "retail_bpp_on_status_message_73",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "name": {
                                                        "id": "retail_bpp_on_status_message_74",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "state": {
                                                        "id": "retail_bpp_on_status_message_75",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            },
                                            "gps": {
                                                "id": "retail_bpp_on_status_message_76",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "person": {
                                        "id": "retail_bpp_on_status_message_77",
                                        "type": "object",
                                        "properties": {
                                            "name": {
                                                "id": "retail_bpp_on_status_message_78",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "time": {
                                        "id": "retail_bpp_on_status_message_79",
                                        "type": "object",
                                        "optional": true,
                                        "properties": {
                                            "range": {
                                                "id": "retail_bpp_on_status_message_80",
                                                "type": "object",
                                                "optional": true,
                                                "properties": {
                                                    "start": {
                                                        "id": "retail_bpp_on_status_message_81",
                                                        "type": "string",
                                                        "minLength": 1,
                                                        "optional": true,
                                                    },
                                                    "end": {
                                                        "id": "retail_bpp_on_status_message_82",
                                                        "type": "string",
                                                        "minLength": 1,
                                                        "optional": true,
                                                    }
                                                }
                                            },
                                            "timestamp": {
                                                "id": "retail_bpp_on_status_message_83",
                                                "type": "string",
                                                "minLength": 1,
                                                "optional": true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "quote": {
                    "id": "retail_bpp_on_status_message_84",
                    "type": "object",
                    "properties": {
                        "price": {
                            "id": "retail_bpp_on_status_message_85",
                            "type": "object",
                            "properties": {
                                "currency": {
                                    "id": "retail_bpp_on_status_message_86",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "value": {
                                    "id": "retail_bpp_on_status_message_87",
                                    "type": "string",
                                    "minLength": 1,
                                    "compliance": "price",
                                    "errorMessage": "should have two places of decimal"
                                }
                            }
                        },
                        "breakup": {
                            "id": "retail_bpp_on_status_message_88",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bpp_on_status_message_89",
                                "type": "object",
                                "properties": {
                                    "@ondc/org/item_id": {
                                        "id": "retail_bpp_on_status_message_90",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "title": {
                                        "id": "retail_bpp_on_status_message_91",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "@ondc/org/item_quantity": {
                                        "id": "retail_bpp_on_status_message_92",
                                        "type": "object",
                                        "properties": {
                                            "count": {
                                                "id": "retail_bpp_on_status_message_93",
                                                "type": "number"
                                            }
                                        }
                                    },
                                    "@ondc/org/title_type": {
                                        "id": "retail_bpp_on_status_message_94",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "price": {
                                        "id": "retail_bpp_on_status_message_95",
                                        "type": "object",
                                        "properties": {
                                            "currency": {
                                                "id": "retail_bpp_on_status_message_96",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "value": {
                                                "id": "retail_bpp_on_status_message_97",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "item": {
                                        "id": "retail_bpp_on_status_message_98",
                                        "type": "object",
                                        "properties": {
                                            "parent_item_id": {
                                                "id": "retail_bpp_on_status_message_99",
                                                "type": "string"
                                            },
                                            "price": {
                                                "id": "retail_bpp_on_status_message_100",
                                                "type": "object",
                                                "properties": {
                                                    "currency": {
                                                        "id": "retail_bpp_on_status_message_101",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "value": {
                                                        "id": "retail_bpp_on_status_message_102",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            },
                                            "tags": {
                                                "id": "retail_bpp_on_status_message_103",
                                                "type": "array",
                                                "element": {
                                                    "id": "retail_bpp_on_status_message_104",
                                                    "type": "object",
                                                    "properties": {
                                                        "code": {
                                                            "id": "retail_bpp_on_status_message_105",
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
                                                            "id": "retail_bpp_on_status_message_106",
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
                                                                                    "id": "retail_bpp_on_status_message_107",
                                                                                    "type": "string",
                                                                                    "enum": ["type"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_status_message_144",
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
                                                                                    "id": "retail_bpp_on_status_message_145",
                                                                                    "type": "string",
                                                                                    "enum": ["id"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_status_message_146",
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
                                                                                    "id": "retail_bpp_on_status_message_147",
                                                                                    "type": "string",
                                                                                    "enum": ["country"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_status_message_148",
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
                                                                                    "id": "retail_bpp_on_status_message_149",
                                                                                    "type": "string",
                                                                                    "enum": ["veg"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_status_message_150",
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
                                                                                    "id": "retail_bpp_on_status_message_151",
                                                                                    "type": "string",
                                                                                    "enum": ["default"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_status_message_152",
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
                            "id": "retail_bpp_on_status_message_147",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "payment": {
                    "id": "retail_bpp_on_status_message_108",
                    "type": "object",
                    "properties": {
                        "type": {
                            "id": "retail_bpp_on_status_message_109",
                            "type": "string",
                            "minLength": 1
                        },
                        "collected_by": {
                            "id": "retail_bpp_on_status_message_110",
                            "type": "string",
                            "minLength": 1
                        },
                        "@ondc/org/buyer_app_finder_fee_type": {
                            "id": "retail_bpp_on_status_message_111",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "@ondc/org/buyer_app_finder_fee_amount": {
                            "id": "retail_bpp_on_status_message_112",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "@ondc/org/settlement_basis": {
                            "id": "retail_bpp_on_status_message_113",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "@ondc/org/settlement_window": {
                            "id": "retail_bpp_on_status_message_114",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "@ondc/org/withholding_amount": {
                            "id": "retail_bpp_on_status_message_115",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "@ondc/org/settlement_details": {
                            "id": "retail_bpp_on_status_message_116",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bpp_on_status_message_117",
                                "type": "object",
                                "properties": {
                                    "settlement_counterparty": {
                                        "id": "retail_bpp_on_status_message_118",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "upi_address": {
                                        "id": "retail_bpp_on_status_message_119",
                                        "type": "string",
                                        "optional": true,
                                        "minLength": 1
                                    },
                                    "beneficiary_name": {
                                        "id": "retail_bpp_on_status_message_120",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_type": {
                                        "id": "retail_bpp_on_status_message_121",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_bank_account_no": {
                                        "id": "retail_bpp_on_status_message_122",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_ifsc_code": {
                                        "id": "retail_bpp_on_status_message_123",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_phase": {
                                        "id": "retail_bpp_on_status_message_124",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_status": {
                                        "id": "retail_bpp_on_status_message_125",
                                        "type": "string",
                                        "optional": true,
                                        "minLength": 1
                                    },
                                    "bank_name": {
                                        "id": "retail_bpp_on_status_message_126",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "branch_name": {
                                        "id": "retail_bpp_on_status_message_127",
                                        "type": "string",
                                        "minLength": 1
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
                                                    "settlement_type": {
                                                        "const": [
                                                            "upi"
                                                        ]
                                                    }
                                                }
                                            },
                                            "then": [
                                                "settlement_type",
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
                                                "params",
                                                "collected_by",
                                                "@ondc/org/buyer_app_finder_fee_type",
                                                "@ondc/org/buyer_app_finder_fee_amount",
                                                "@ondc/org/settlement_details",
                                                "@ondc/org/settlement_basis",
                                                "@ondc/org/settlement_window",
                                                "@ondc/org/withholding_amount"
                                            ]
                                        }
                                    ]
                                }
                            }
                        },
                        "status": {
                            "id": "retail_bpp_on_status_message_128",
                            "type": "string",
                            "minLength": 1
                        },
                        "params": {
                            "id": "retail_bpp_on_status_message_129",
                            "type": "object",
                            "properties": {
                                "currency": {
                                    "id": "retail_bpp_on_status_message_130",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "amount": {
                                    "id": "retail_bpp_on_status_message_131",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "transaction_id": {
                                    "id": "retail_bpp_on_status_message_132",
                                    "type": "string",
                                    "minLength": 1
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
                                        "params",
                                        "collected_by",
                                        "@ondc/org/buyer_app_finder_fee_type",
                                        "@ondc/org/buyer_app_finder_fee_amount",
                                        "@ondc/org/settlement_details",
                                        "@ondc/org/settlement_basis",
                                        "@ondc/org/settlement_window",
                                        "@ondc/org/withholding_amount"
                                    ]
                                }
                            ]
                        }
                    }
                },
                "tags": {
                    "id": "retail_bpp_on_status_message_135",
                    "type": "array",
                    "minItems": 1,
                    "optional": true,
                    "element": {
                        "id": "retail_bpp_on_status_message_136",
                        "type": "object",
                        "properties": {
                            "code": {
                                "id": "retail_bpp_on_status_message_137",
                                "type": "string",
                                "minLength": 1
                            },
                            "list": {
                                "id": "retail_bpp_on_status_message_138",
                                "type": "array",
                                "minItems": 1,
                                "element": {
                                    "id": "retail_bpp_on_status_message_139",
                                    "type": "object",
                                    "properties": {
                                        "code": {
                                            "id": "retail_bpp_on_status_message_140",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "value": {
                                            "id": "retail_bpp_on_status_message_141",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "created_at": {
                    "id": "retail_bpp_on_status_message_142",
                    "type": "string",
                    "minLength": 1,
                    "format": "rfc3339-date-time",
                    "errorMessage": "Time must be RFC3339 UTC timestamp format."
                },
                "updated_at": {
                    "id": "retail_bpp_on_status_message_143",
                    "type": "string",
                    "minLength": 1,
                    "format": "rfc3339-date-time",
                    "errorMessage": "Time must be RFC3339 UTC timestamp format."
                }
            }
        }
    }
}

