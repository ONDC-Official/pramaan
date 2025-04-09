module.exports = {
    "id": "retail_bpp_on_search_message_1",
    "type": "object",
    "properties": {
        "catalog": {
            "id": "retail_bpp_on_search_message_2",
            "type": "object",
            "properties": {
                // "bpp/fulfillments": {
                //      "id": "retail_bpp_on_search_message_",
                //  "type": "array",
                //     "element": {
                //          "id": "retail_bpp_on_search_message_",
                //  "type": "object",
                //         "properties": {
                //             "id": {
                //                  "id": "retail_bpp_on_search_message_",
                //  "type": "string",
                //                 "business": "unique"
                //             },
                //             "type": {
                //                  "id": "retail_bpp_on_search_message_",
                //  "type": "string",
                //                 "enum": [
                //                     "Delivery",
                //                     "Self-Pickup"
                //                 ]
                //             }
                //         },
                //         "required": [
                //             "id",
                //             "type"
                //         ]
                //     }
                // },
                "bpp/descriptor": {
                    "id": "retail_bpp_on_search_message_3",
                    "type": "object",
                    "properties": {
                        "name": {
                            "id": "retail_bpp_on_search_message_4",
                            "type": "string"
                        },
                        "symbol": {
                            "id": "retail_bpp_on_search_message_5",
                            "type": "string",
                            "format": "url",
                            "errorMessage": "should be URLs or can be empty strings as well"
                        },
                        "short_desc": {
                            "id": "retail_bpp_on_search_message_6",
                            "type": "string"
                        },
                        "long_desc": {
                            "id": "retail_bpp_on_search_message_7",
                            "type": "string"
                        },
                        "images": {
                            "id": "retail_bpp_on_search_message_8",
                            "type": "array",
                            "element": {
                                "id": "retail_bpp_on_search_message_9",
                                "type": "string",
                                "pattern": "^$|^https?:\\/\\/[^\\s]*",
                                "errorMessage": "should be URLs or can be empty strings as well"
                            }
                        },
                        "tags": {
                            "id": "retail_bpp_on_search_message_10",
                            "type": "array",
                            "element": {
                                "id": "retail_bpp_on_search_message_11",
                                "type": "object",
                                "properties": {
                                    "code": {
                                        "id": "retail_bpp_on_search_message_12",
                                        "type": "string",
                                        "enum": [
                                            "bpp_terms"
                                        ]
                                    },
                                    "list": {
                                        "id": "retail_bpp_on_search_message_13",
                                        "type": "array",
                                        "element": {
                                            "allOf": [
                                                {
                                                    "if": {
                                                        "properties": {
                                                            "code": {
                                                                "const": "np_type"
                                                            }
                                                        }
                                                    },
                                                    "then": {
                                                        "id": "retail_bpp_on_search_message_14",
                                                        "type": "object",
                                                        "properties": {
                                                            "code": {
                                                                "id": "retail_bpp_on_search_message_15",
                                                                "type": "string",
                                                                "enum": [
                                                                    "np_type"
                                                                ]
                                                            },
                                                            "value": {
                                                                "id": "retail_bpp_on_search_message_16",
                                                                "type": "string",
                                                                "enum": [
                                                                    "MSN",
                                                                    "ISN"
                                                                ]
                                                            }
                                                        },
                                                        "required": [
                                                            "code",
                                                            "value"
                                                        ],
                                                        "additionalProperties": false
                                                    }
                                                },
                                                {
                                                    "if": {
                                                        "properties": {
                                                            "code": {
                                                                "const": "accept_bap_terms"
                                                            }
                                                        }
                                                    },
                                                    "then": {
                                                        "id": "retail_bpp_on_search_message_17",
                                                        "type": "object",
                                                        "properties": {
                                                            "code": {
                                                                "id": "retail_bpp_on_search_message_18",
                                                                "type": "string",
                                                                "enum": [
                                                                    "accept_bap_terms"
                                                                ]
                                                            },
                                                            "value": {
                                                                "id": "retail_bpp_on_search_message_19",
                                                                "type": "string",
                                                                "enum": [
                                                                    "Y",
                                                                    "N"
                                                                ]
                                                            }
                                                        },
                                                        "required": [
                                                            "code",
                                                            "value"
                                                        ],
                                                        "additionalProperties": false
                                                    }
                                                },
                                                {
                                                    "if": {
                                                        "properties": {
                                                            "code": {
                                                                "const": "collect_payment"
                                                            }
                                                        }
                                                    },
                                                    "then": {
                                                        "id": "retail_bpp_on_search_message_20",
                                                        "type": "object",
                                                        "properties": {
                                                            "code": {
                                                                "id": "retail_bpp_on_search_message_21",
                                                                "type": "string",
                                                                "enum": [
                                                                    "collect_payment"
                                                                ]
                                                            },
                                                            "value": {
                                                                "id": "retail_bpp_on_search_message_22",
                                                                "type": "string",
                                                                "enum": [
                                                                    "Y",
                                                                    "N"
                                                                ]
                                                            }
                                                        },
                                                        "required": [
                                                            "code",
                                                            "value"
                                                        ],
                                                        "additionalProperties": false
                                                    }
                                                }
                                            ]
                                        },
                                        "minItems": 1
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
                        "id": "retail_bpp_on_search_message_23",
                        "type": "array",
                        "element": {
                            "allOf": [
                                {
                                    "if": {
                                        "properties": {
                                            "id": "retail_bpp_on_search_message_24",
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
                                        "name",
                                        "symbol",
                                        "short_desc",
                                        "long_desc",
                                        "images",
                                        "tags"
                                    ]
                                },
                                {
                                    "if": {
                                        "properties": {
                                            "id": "retail_bpp_on_search_message_25",
                                            "type": "params",
                                            "domain": {
                                                "const": "ONDC:RET11"
                                            }
                                        }
                                    },
                                    "then": [
                                        "name",
                                        "symbol",
                                        "short_desc",
                                        "long_desc",
                                        "images",
                                        "tags"
                                    ]
                                }
                            ]
                        }
                    },
                    "additionalProperties": true
                },
                "bpp/providers": {
                    "id": "retail_bpp_on_search_message_26",
                    "type": "array",
                    "element": {
                        "id": "retail_bpp_on_search_message_27",
                        "type": "object",
                        "properties": {
                            "id": {
                                "id": "retail_bpp_on_search_message_28",
                                "type": "string",
                                "business": "unique"
                            },
                            "time": {
                                "id": "retail_bpp_on_search_message_29",
                                "type": "object",
                                "properties": {
                                    "label": {
                                        "id": "retail_bpp_on_search_message_30",
                                        "type": "string",
                                        "enum": [
                                            "enable",
                                            "disable"
                                        ]
                                    },
                                    "timestamp": {
                                        "id": "retail_bpp_on_search_message_31",
                                        "type": "string",
                                        "compliance": "rfc3339-date-time"
                                    }
                                },
                                "required": [
                                    "label",
                                    "timestamp"
                                ]
                            },
                            "fulfillments": {
                                "id": "retail_bpp_on_search_message_32",
                                "type": "array",
                                "element": {
                                    "id": "retail_bpp_on_search_message_33",
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "id": "retail_bpp_on_search_message_34",
                                            "type": "string",
                                            "business": "unique"
                                        },
                                        "type": {
                                            "id": "retail_bpp_on_search_message_35",
                                            "type": "string"
                                        },
                                        "contact": {
                                            "id": "retail_bpp_on_search_message_36",
                                            "type": "object",
                                            "properties": {
                                                "phone": {
                                                    "id": "retail_bpp_on_search_message_37",
                                                    "type": "string",
                                                    "compliance": "phone"
                                                },
                                                "email": {
                                                    "id": "retail_bpp_on_search_message_38",
                                                    "type": "string",
                                                    "compliance": "email"
                                                }
                                            },
                                            "required": [
                                                "phone",
                                                "email"
                                            ]
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "type",
                                        "contact"
                                    ]
                                }
                            },
                            "descriptor": {
                                "id": "retail_bpp_on_search_message_39",
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "id": "retail_bpp_on_search_message_40",
                                        "type": "string"
                                    },
                                    "symbol": {
                                        "id": "retail_bpp_on_search_message_41",
                                        "type": "string"
                                    },
                                    "short_desc": {
                                        "id": "retail_bpp_on_search_message_42",
                                        "type": "string"
                                    },
                                    "long_desc": {
                                        "id": "retail_bpp_on_search_message_43",
                                        "type": "string"
                                    },
                                    "images": {
                                        "id": "retail_bpp_on_search_message_44",
                                        "type": "array",
                                        "element": {
                                            "id": "retail_bpp_on_search_message_45",
                                            "type": "string"
                                        }
                                    }
                                },
                                "required": [
                                    "name",
                                    "symbol",
                                    "short_desc",
                                    "long_desc",
                                    "images"
                                ]
                            },
                            "@ondc/org/fssai_license_no": {
                                "id": "retail_bpp_on_search_message_46",
                                "type": "string",
                                "compliance": "fssai"
                            },
                            "ttl": {
                                "id": "retail_bpp_on_search_message_47",
                                "type": "string",
                                "format": "duration"
                            },
                            "locations": {
                                "id": "retail_bpp_on_search_message_48",
                                "type": "array",
                                "element": {
                                    "id": "retail_bpp_on_search_message_49",
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "id": "retail_bpp_on_search_message_50",
                                            "type": "string",
                                            "business": "unique"
                                        },
                                        "time": {
                                            "id": "retail_bpp_on_search_message_51",
                                            "type": "object",
                                            "optional": true,
                                            "properties": {
                                                "label": {
                                                    "id": "retail_bpp_on_search_message_52",
                                                    "type": "string",
                                                    "enum": [
                                                        "enable",
                                                        "disable",
                                                        "open",
                                                        "close"
                                                    ]
                                                },
                                                "timestamp": {
                                                    "id": "retail_bpp_on_search_message_53",
                                                    "type": "string",
                                                    "compliance": "rfc3339-date-time"
                                                },
                                                "days": {
                                                    "id": "retail_bpp_on_search_message_54",
                                                    "type": "string",
                                                    "optional": true
                                                },
                                                "schedule": {
                                                    "id": "retail_bpp_on_search_message_55",
                                                    "type": "object",
                                                    "properties": {
                                                        "holidays": {
                                                            "id": "retail_bpp_on_search_message_56",
                                                            "type": "array",
                                                            "element": {
                                                                "id": "retail_bpp_on_search_message_57",
                                                                "type": "string",
                                                                "format": "date"
                                                            }
                                                        }
                                                    },
                                                    "required": [
                                                        "holidays"
                                                    ]
                                                }
                                            },
                                            "required": [
                                                "label",
                                                "timestamp",
                                                "days",
                                                "schedule"
                                            ]
                                        },
                                        "gps": {
                                            "id": "retail_bpp_on_search_message_58",
                                            "type": "string"
                                        },
                                        "address": {
                                            "id": "retail_bpp_on_search_message_59",
                                            "type": "object",
                                            "properties": {
                                                "locality": {
                                                    "id": "retail_bpp_on_search_message_60",
                                                    "type": "string"
                                                },
                                                "street": {
                                                    "id": "retail_bpp_on_search_message_61",
                                                    "type": "string"
                                                },
                                                "city": {
                                                    "id": "retail_bpp_on_search_message_62",
                                                    "type": "string"
                                                },
                                                "area_code": {
                                                    "id": "retail_bpp_on_search_message_63",
                                                    "type": "string",
                                                    "minLength": 6,
                                                    "maxLength": 6
                                                },
                                                "state": {
                                                    "id": "retail_bpp_on_search_message_64",
                                                    "type": "string"
                                                }
                                            },
                                            "required": [
                                                "locality",
                                                "street",
                                                "city",
                                                "area_code",
                                                "state"
                                            ]
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "time",
                                        "gps",
                                        "address"
                                    ]
                                }
                            },
                            "categories": {
                                "id": "retail_bpp_on_search_message_65",
                                "type": "array",
                                "element": {
                                    "id": "retail_bpp_on_search_message_66",
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "id": "retail_bpp_on_search_message_67",
                                            "type": "string",
                                            "business": "unique"
                                        },
                                        "descriptor": {
                                            "id": "retail_bpp_on_search_message_68",
                                            "type": "object",
                                            "properties": {
                                                "name": {
                                                    "id": "retail_bpp_on_search_message_69",
                                                    "type": "string"
                                                },
                                                "short_desc": {
                                                    "id": "retail_bpp_on_search_message_70",
                                                    "type": "string"
                                                },
                                                "long_desc": {
                                                    "id": "retail_bpp_on_search_message_71",
                                                    "type": "string"
                                                },
                                                "images": {
                                                    "id": "retail_bpp_on_search_message_72",
                                                    "type": "array",
                                                    "element": {
                                                        "id": "retail_bpp_on_search_message_73",
                                                        "type": "string",
                                                        "format": "url"
                                                    }
                                                }
                                            },
                                            "required": [
                                                "name"
                                            ]
                                        },
                                        "tags": {
                                            "id": "retail_bpp_on_search_message_74",
                                            "type": "array",
                                            "element": {
                                                "id": "retail_bpp_on_search_message_75",
                                                "type": "object",
                                                "properties": {
                                                    "code": {
                                                        "id": "retail_bpp_on_search_message_76",
                                                        "type": "string"
                                                    },
                                                    "list": {
                                                        "id": "retail_bpp_on_search_message_77",
                                                        "type": "array",
                                                        "element": {
                                                            "id": "retail_bpp_on_search_message_78",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bpp_on_search_message_79",
                                                                    "type": "string"
                                                                },
                                                                "value": {
                                                                    "id": "retail_bpp_on_search_message_80",
                                                                    "type": "string"
                                                                }
                                                            },
                                                            "required": [
                                                                "code",
                                                                "value"
                                                            ]
                                                        }
                                                    }
                                                },
                                                "required": [
                                                    "code",
                                                    "list"
                                                ]
                                            }
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "descriptor",
                                        "tags"
                                    ]
                                }
                            },
                            "items": {
                                "id": "retail_bpp_on_search_message_81",
                                "type": "array",
                                "element": {
                                    "id": "retail_bpp_on_search_message_82",
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "id": "retail_bpp_on_search_message_83",
                                            "type": "string",
                                            "business": "unique"
                                        },
                                        "time": {
                                            "id": "retail_bpp_on_search_message_84",
                                            "type": "object",
                                            "properties": {
                                                "label": {
                                                    "id": "retail_bpp_on_search_message_85",
                                                    "type": "string",
                                                    "enum": [
                                                        "enable",
                                                        "disable"
                                                    ]
                                                },
                                                "timestamp": {
                                                    "id": "retail_bpp_on_search_message_86",
                                                    "type": "string",
                                                    "compliance": "rfc3339-date-time",
                                                    "business": {
                                                        "id": "retail_bpp_on_search_message_87",
                                                        "type": "params",
                                                        "timestamp": {
                                                            "compare": "<=",
                                                            "name": "timestamp must be <= Context.timestamp"
                                                        }
                                                    }
                                                }
                                            },
                                            "required": [
                                                "label",
                                                "timestamp"
                                            ]
                                        },
                                        "parent_item_id": {
                                            "id": "retail_bpp_on_search_message_88",
                                            "type": "string"
                                        },
                                        "descriptor": {
                                            "id": "retail_bpp_on_search_message_89",
                                            "type": "object",
                                            "properties": {
                                                "name": {
                                                    "id": "retail_bpp_on_search_message_90",
                                                    "type": "string"
                                                },
                                                "code": {
                                                    "id": "retail_bpp_on_search_message_91",
                                                    "type": "string",
                                                    "pattern": "^(1|2|3|4|5):[a-zA-Z0-9]+$",
                                                    "errorMessage": "should be in this format - \"type:code\" where type is 1 - EAN, 2 - ISBN, 3 - GTIN, 4 - HSN, 5 - others"
                                                },
                                                "symbol": {
                                                    "id": "retail_bpp_on_search_message_92",
                                                    "type": "string"
                                                },
                                                "short_desc": {
                                                    "id": "retail_bpp_on_search_message_93",
                                                    "type": "string"
                                                },
                                                "long_desc": {
                                                    "id": "retail_bpp_on_search_message_94",
                                                    "type": "string"
                                                },
                                                "images": {
                                                    "id": "retail_bpp_on_search_message_95",
                                                    "type": "array",
                                                    "element": {
                                                        "id": "retail_bpp_on_search_message_96",
                                                        "type": "string",
                                                        "optional": true
                                                    }
                                                }
                                            },
                                            "required": [
                                                "name",
                                                "symbol",
                                                "short_desc",
                                                "long_desc",
                                                "images"
                                            ]
                                        },
                                        "quantity": {
                                            "id": "retail_bpp_on_search_message_97",
                                            "type": "object",
                                            "properties": {
                                                "unitized": {
                                                    "id": "retail_bpp_on_search_message_98",
                                                    "type": "object",
                                                    "properties": {
                                                        "measure": {
                                                            "id": "retail_bpp_on_search_message_99",
                                                            "type": "object",
                                                            "properties": {
                                                                "unit": {
                                                                    "id": "retail_bpp_on_search_message_100",
                                                                    "type": "string",
                                                                    "enum": [
                                                                        "unit",
                                                                        "dozen",
                                                                        "gram",
                                                                        "kilogram",
                                                                        "tonne",
                                                                        "litre",
                                                                        "millilitre"
                                                                    ]
                                                                },
                                                                "value": {
                                                                    "id": "retail_bpp_on_search_message_101",
                                                                    "type": "string",
                                                                    "pattern": "^[0-9]+(.[0-9]+)?$",
                                                                    "errorMessage": "enter a valid number"
                                                                }
                                                            },
                                                            "required": [
                                                                "unit",
                                                                "value"
                                                            ]
                                                        }
                                                    },
                                                    "required": [
                                                        "measure"
                                                    ]
                                                },
                                                "available": {
                                                    "id": "retail_bpp_on_search_message_102",
                                                    "type": "object",
                                                    "properties": {
                                                        "count": {
                                                            "id": "retail_bpp_on_search_message_103",
                                                            "type": "string",
                                                            "pattern": "^[0-9]+$"
                                                        }
                                                    },
                                                    "required": [
                                                        "count"
                                                    ]
                                                },
                                                "maximum": {
                                                    "id": "retail_bpp_on_search_message_104",
                                                    "type": "object",
                                                    "properties": {
                                                        "count": {
                                                            "id": "retail_bpp_on_search_message_105",
                                                            "type": "string",
                                                            "pattern": "^[0-9]+$",
                                                            "errorMessage": "maximum count must be numbers only "
                                                        }
                                                    },
                                                    "required": [
                                                        "count"
                                                    ]
                                                }
                                            },
                                            "required": {
                                                "id": "retail_bpp_on_search_message_106",
                                                "type": "array",
                                                "element": {
                                                    "allOf": [
                                                        {
                                                            "if": {
                                                                "properties": {
                                                                    "id": "retail_bpp_on_search_message_107",
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
                                                                "unitized",
                                                                "available",
                                                                "maximum"
                                                            ]
                                                        },
                                                        {
                                                            "if": {
                                                                "properties": {
                                                                    "id": "retail_bpp_on_search_message_108",
                                                                    "type": "params",
                                                                    "domain": {
                                                                        "const": "ONDC:RET11"
                                                                    }
                                                                }
                                                            },
                                                            "then": [
                                                                "unitized",
                                                                "available",
                                                                "maximum"
                                                            ]
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        "price": {
                                            "id": "retail_bpp_on_search_message_109",
                                            "type": "object",
                                            "properties": {
                                                "currency": {
                                                    "id": "retail_bpp_on_search_message_110",
                                                    "type": "string",
                                                    "compliance": "currency"
                                                },
                                                "value": {
                                                    "id": "retail_bpp_on_search_message_111",
                                                    "type": "string",
                                                    "pattern": "^(?!0+$)(?!0*\\.0+$)\\d+(\\.\\d{1,2})?$",
                                                    "errorMessage": "Price value should be a number in string with upto 2 decimal places"
                                                },
                                                "maximum_value": {
                                                    "id": "retail_bpp_on_search_message_112",
                                                    "type": "string",
                                                    "pattern": "^(?!0+$)(?!0*\\.0+$)\\d+(\\.\\d{1,2})?$"
                                                }
                                            },
                                            "required": [
                                                "currency",
                                                "value",
                                                "maximum_value"
                                            ]
                                        },
                                        "category_id": {
                                            "id": "retail_bpp_on_search_message_113",
                                            "type": "string",
                                            "errorMessage": "Invalid category ID found for item for on_search"
                                        },
                                        "fulfillment_id": {
                                            "id": "retail_bpp_on_search_message_114",
                                            "type": "string"
                                        },
                                        "location_id": {
                                            "id": "retail_bpp_on_search_message_115",
                                            "type": "string"
                                        },
                                        "@ondc/org/returnable": {
                                            "id": "retail_bpp_on_search_message_116",
                                            "type": "boolean"
                                        },
                                        "@ondc/org/cancellable": {
                                            "id": "retail_bpp_on_search_message_117",
                                            "type": "boolean"
                                        },
                                        "@ondc/org/return_window": {
                                            "id": "retail_bpp_on_search_message_118",
                                            "type": "string",
                                            "format": "duration"
                                        },
                                        "@ondc/org/seller_pickup_return": {
                                            "id": "retail_bpp_on_search_message_119",
                                            "type": "boolean"
                                        },
                                        "@ondc/org/time_to_ship": {
                                            "id": "retail_bpp_on_search_message_120",
                                            "type": "string",
                                            "format": "duration"
                                        },
                                        "@ondc/org/available_on_cod": {
                                            "id": "retail_bpp_on_search_message_121",
                                            "type": "boolean"
                                        },
                                        "@ondc/org/contact_details_consumer_care": {
                                            "id": "retail_bpp_on_search_message_122",
                                            "type": "string"
                                        },
                                        "@ondc/org/statutory_reqs_packaged_commodities": {
                                            "id": "retail_bpp_on_search_message_123",
                                            "type": "object",
                                            "properties": {
                                                "manufacturer_or_packer_name": {
                                                    "id": "retail_bpp_on_search_message_124",
                                                    "type": "string"
                                                },
                                                "manufacturer_or_packer_address": {
                                                    "id": "retail_bpp_on_search_message_125",
                                                    "type": "string"
                                                },
                                                "common_or_generic_name_of_commodity": {
                                                    "id": "retail_bpp_on_search_message_126",
                                                    "type": "string"
                                                },
                                                "month_year_of_manufacture_packing_import": {
                                                    "id": "retail_bpp_on_search_message_127",
                                                    "type": "string"
                                                }
                                            },
                                            "required": [
                                                "manufacturer_or_packer_name",
                                                "manufacturer_or_packer_address",
                                                "common_or_generic_name_of_commodity",
                                                "month_year_of_manufacture_packing_import"
                                            ]
                                        },
                                        "@ondc/org/statutory_reqs_prepackaged_food": {
                                            "id": "retail_bpp_on_search_message_128",
                                            "type": "object",
                                            "properties": {
                                                "nutritional_info": {
                                                    "id": "retail_bpp_on_search_message_129",
                                                    "type": "string"
                                                },
                                                "additives_info": {
                                                    "id": "retail_bpp_on_search_message_130",
                                                    "type": "string"
                                                },
                                                "brand_owner_FSSAI_license_no": {
                                                    "id": "retail_bpp_on_search_message_131",
                                                    "type": "string",
                                                    "compliance": "fssai"
                                                },
                                                "other_FSSAI_license_no": {
                                                    "id": "retail_bpp_on_search_message_132",
                                                    "type": "string",
                                                    "compliance": "fssai"
                                                },
                                                "importer_FSSAI_license_no": {
                                                    "id": "retail_bpp_on_search_message_133",
                                                    "type": "string",
                                                    "compliance": "fssai"
                                                },
                                                "ingredients_info": {
                                                    "id": "retail_bpp_on_search_message_134",
                                                    "type": "string"
                                                }
                                            }
                                        },
                                        "tags": {
                                            "id": "retail_bpp_on_search_message_135",
                                            "type": "array",
                                            "element": {
                                                "id": "retail_bpp_on_search_message_136",
                                                "type": "object",
                                                "properties": {
                                                    "code": {
                                                        "id": "retail_bpp_on_search_message_137",
                                                        "type": "string",
                                                        "optional": true
                                                    },
                                                    "list": {
                                                        "id": "retail_bpp_on_search_message_138",
                                                        "type": "array",
                                                        "optional": true,
                                                        "element": [
                                                            {
                                                                "id": "retail_bpp_on_search_message_139",
                                                                "type": "object",
                                                                "properties": {
                                                                    "code": {
                                                                        "id": "retail_bpp_on_search_message_140",
                                                                        "type": "string"
                                                                    },
                                                                    "value": {
                                                                        "id": "retail_bpp_on_search_message_141",
                                                                        "type": "string"
                                                                    }
                                                                },
                                                                "required": [
                                                                    "code",
                                                                    "value"
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "code",
                                                    "list"
                                                ]
                                            }
                                        },
                                    },
                                    "required": {
                                        "id": "retail_bpp_on_search_message_142",
                                        "type": "array",
                                        "element": {
                                            "id": "retail_bpp_on_search_message_143",
                                            "allOf": [
                                                {
                                                    "id": "retail_bpp_on_search_message_144",
                                                    "if": {
                                                        "id": "retail_bpp_on_search_message_145",
                                                        "properties": {
                                                            "id": "retail_bpp_on_search_message_146",
                                                            "type": "params",
                                                            "domain": {
                                                                "id": "retail_bpp_on_search_message_147",
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
                                                    "id": "retail_bpp_on_search_message_148",
                                                    "then": [
                                                        "id",
                                                        "time",
                                                        "descriptor",
                                                        "quantity",
                                                        "price",
                                                        "category_id",
                                                        "fulfillment_id",
                                                        "location_id",
                                                        "@ondc/org/returnable",
                                                        "@ondc/org/cancellable",
                                                        "@ondc/org/return_window",
                                                        "@ondc/org/seller_pickup_return",
                                                        "@ondc/org/time_to_ship",
                                                        "@ondc/org/available_on_cod",
                                                        "@ondc/org/contact_details_consumer_care",
                                                        "tags"
                                                    ]
                                                },
                                                {
                                                    "id": "retail_bpp_on_search_message_149",
                                                    "if": {
                                                        "id": "retail_bpp_on_search_message_150",
                                                        "properties": {
                                                            "id": "retail_bpp_on_search_message_151",
                                                            "type": "params",
                                                            "domain": {
                                                                "id": "retail_bpp_on_search_message_152",
                                                                "const": "ONDC:RET11"
                                                            }
                                                        }
                                                    },
                                                    "id": "retail_bpp_on_search_message_153",
                                                    "then": [
                                                        "id",
                                                        "descriptor",
                                                        "quantity",
                                                        "price",
                                                        "category_id",
                                                        "tags"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            "creds": {
                                "id": "retail_bpp_on_search_message_154",
                                "type": "array",
                                "element": {
                                    "id": "retail_bpp_on_search_message_155",
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "id": "retail_bpp_on_search_message_156",
                                            "type": "string",
                                            "business": "unique"
                                        },
                                        "descriptor": {
                                            "id": "retail_bpp_on_search_message_157",
                                            "type": "object",
                                            "properties": {
                                                "code": {
                                                    "id": "retail_bpp_on_search_message_158",
                                                    "type": "string"
                                                },
                                                "name": {
                                                    "id": "retail_bpp_on_search_message_159",
                                                    "type": "string"
                                                }
                                            },
                                            "required": [
                                                "name"
                                            ]
                                        },
                                        "url": {
                                            "id": "retail_bpp_on_search_message_160",
                                            "type": "string",
                                            "format": "url"
                                        },
                                        "tags": {
                                            "id": "retail_bpp_on_search_message_161",
                                            "type": "array",
                                            "element": {
                                                "id": "retail_bpp_on_search_message_162",
                                                "type": "object",
                                                "properties": {
                                                    "code": {
                                                        "id": "retail_bpp_on_search_message_163",
                                                        "type": "string"
                                                    },
                                                    "list": {
                                                        "id": "retail_bpp_on_search_message_164",
                                                        "type": "array",
                                                        "element": {
                                                            "id": "retail_bpp_on_search_message_165",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bpp_on_search_message_166",
                                                                    "type": "string"
                                                                },
                                                                "value": {
                                                                    "id": "retail_bpp_on_search_message_167",
                                                                    "type": "string"
                                                                }
                                                            },
                                                            "required": [
                                                                "code",
                                                                "value"
                                                            ],
                                                            "additionalProperties": false
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
                                    "required": [
                                        "id",
                                        "descriptor",
                                        "url",
                                        "tags"
                                    ]
                                }
                            },
                            "offers": {
                                "id": "retail_bpp_on_search_message_168",
                                "type": "array",
                                "element": {
                                    "id": "retail_bpp_on_search_message_169",
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "id": "retail_bpp_on_search_message_170",
                                            "type": "string",
                                            "business": "unique"
                                        },
                                        "descriptor": {
                                            "id": "retail_bpp_on_search_message_171",
                                            "type": "object",
                                            "properties": {
                                                "code": {
                                                    "id": "retail_bpp_on_search_message_172",
                                                    "type": "string"
                                                },
                                                "images": {
                                                    "id": "retail_bpp_on_search_message_173",
                                                    "type": "array",
                                                    "element": {
                                                        "id": "retail_bpp_on_search_message_174",
                                                        "type": "string"
                                                    }
                                                }
                                            },
                                            "required": [
                                                "code",
                                                "images"
                                            ]
                                        },
                                        "location_ids": {
                                            "id": "retail_bpp_on_search_message_175",
                                            "type": "array",
                                            "element": {
                                                "id": "retail_bpp_on_search_message_176",
                                                "type": "string"
                                            }
                                        },
                                        "item_ids": {
                                            "id": "retail_bpp_on_search_message_177",
                                            "type": "array",
                                            "element": {
                                                "id": "retail_bpp_on_search_message_178",
                                                "type": "string"
                                            }
                                        },
                                        "time": {
                                            "id": "retail_bpp_on_search_message_179",
                                            "type": "object",
                                            "properties": {
                                                "label": {
                                                    "id": "retail_bpp_on_search_message_180",
                                                    "type": "string"
                                                },
                                                "range": {
                                                    "id": "retail_bpp_on_search_message_181",
                                                    "type": "object",
                                                    "properties": {
                                                        "start": {
                                                            "id": "retail_bpp_on_search_message_182",
                                                            "type": "string"
                                                        },
                                                        "end": {
                                                            "id": "retail_bpp_on_search_message_183",
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": [
                                                        "start",
                                                        "end"
                                                    ],
                                                    "additionalProperties": false
                                                }
                                            },
                                            "required": [
                                                "label",
                                                "range"
                                            ],
                                            "additionalProperties": false
                                        },
                                        "tags": {
                                            "id": "retail_bpp_on_search_message_184",
                                            "type": "array",
                                            "element": {
                                                "id": "retail_bpp_on_search_message_185",
                                                "type": "object",
                                                "properties": {
                                                    "code": {
                                                        "id": "retail_bpp_on_search_message_186",
                                                        "type": "string"
                                                    },
                                                    "list": {
                                                        "id": "retail_bpp_on_search_message_187",
                                                        "type": "array",
                                                        "element": {
                                                            "id": "retail_bpp_on_search_message_188",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bpp_on_search_message_189",
                                                                    "type": "string"
                                                                },
                                                                "value": {
                                                                    "id": "retail_bpp_on_search_message_190",
                                                                    "type": "string"
                                                                }
                                                            },
                                                            "required": [
                                                                "code",
                                                                "value"
                                                            ],
                                                            "additionalProperties": false
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
                                    "required": [
                                        "id",
                                        "descriptor",
                                        "location_ids",
                                        "item_ids",
                                        "time",
                                        "tags"
                                    ]
                                }
                            },
                            "tags": {
                                "id": "retail_bpp_on_search_message_191",
                                "type": "array",
                                "element": {
                                    "id": "retail_bpp_on_search_message_192",
                                    "type": "object",
                                    "properties": {
                                        "code": {
                                            "id": "retail_bpp_on_search_message_193",
                                            "type": "string",
                                            "optional": true,
                                            "enum": [
                                                "timing",
                                                "serviceability"
                                            ]
                                        },
                                        "list": {
                                            "id": "retail_bpp_on_search_message_194",
                                            "type": "array",
                                            "optional": true,
                                            "minItems": 1,
                                            "element": {
                                                "id": "retail_bpp_on_search_message_195",
                                                "type": "array",
                                                "properties": {
                                                    "code": {
                                                        "id": "retail_bpp_on_search_message_196",
                                                        "type": "string",
                                                        "optional": true
                                                    },
                                                    "value": {
                                                        "id": "retail_bpp_on_search_message_197",
                                                        "type": "string",
                                                        "optional": true
                                                    }
                                                }
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
                            "id": "retail_bpp_on_search_message_198",
                            "type": "array",
                            "element": {
                                "allOf": [
                                    {
                                        "if": {
                                            "properties": {
                                                "id": "retail_bpp_on_search_message_199",
                                                "type": "params",
                                                "domain": {
                                                    "const": [
                                                        "ONDC:RET10",
                                                        "ONDC:RET13",
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
                                            "time",
                                            "fulfillments",
                                            "descriptor",
                                            "ttl",
                                            "locations",
                                            "items",
                                            "tags"
                                        ]
                                    },
                                    {
                                        "if": {
                                            "properties": {
                                                "id": "retail_bpp_on_search_message_200",
                                                "type": "params",
                                                "domain": {
                                                    "const": "ONDC:RET11"
                                                }
                                            }
                                        },
                                        "then": [
                                            "id",
                                            "time",
                                            "fulfillments",
                                            "descriptor",
                                            "@ondc/org/fssai_license_no",
                                            "ttl",
                                            "locations",
                                            "categories",
                                            "items",
                                            "tags"
                                        ]
                                    },
                                    {
                                        "if": {
                                            "properties": {
                                                "id": "retail_bpp_on_search_message_201",
                                                "type": "params",
                                                "domain": {
                                                    "const": [
                                                        "ONDC:RET12",
                                                        "ONDC:RET14"
                                                    ]
                                                }
                                            }
                                        },
                                        "then": [
                                            "id",
                                            "time",
                                            "fulfillments",
                                            "descriptor",
                                            "ttl",
                                            "locations",
                                            "categories",
                                            "items",
                                            "tags"
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            "required": {
                "id": "retail_bpp_on_search_message_202",
                "type": "array",
                "element": {
                    "allOf": [
                        {
                            "if": {
                                "properties": {
                                    "id": "retail_bpp_on_search_message_203",
                                    "type": "params",
                                    "domain": {
                                        "const": [
                                            "ONDC:RET10",
                                            "ONDC:RET11",
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
                                "bpp/descriptor",
                                "bpp/providers",
                                // "bpp/fulfillments"
                            ]
                        },
                        {
                            "if": {
                                "properties": {
                                    "id": "retail_bpp_on_search_message_204",
                                    "type": "params",
                                    "domain": {
                                        "const": [
                                            "ONDC:RET12",
                                            "ONDC:RET13",
                                            "ONDC:RET14"
                                        ]
                                    }
                                }
                            },
                            "then": [
                                "bpp/descriptor",
                                "bpp/providers"
                            ]
                        }
                    ]
                }
            }
        }
    },
    "required": [
        "catalog"
    ]
}