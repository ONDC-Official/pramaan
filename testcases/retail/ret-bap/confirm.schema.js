module.exports = {
  "id": "retail_bap_confirm_message_01",
  "type": "object",
  "properties": {
    "order": {
      "id": "retail_bap_confirm_message_02",
      "type": "object",
      "properties": {
        "id": {
          "id": "retail_bap_confirm_message_03",
          "type": "string",
          "minLength": 1,
          "maxLength": 32
        },
        "state": {
          "id": "retail_bap_confirm_message_04",
          "type": "string",
          "minLength": 1,
          "enum": ["Created"]
        },
        "provider": {
          "id": "retail_bap_confirm_message_05",
          "type": "object",
          "properties": {
            "id": {
              "id": "retail_bap_confirm_message_06",
              "type": "string",
              "minLength": 1
            },
            "locations": {
              "id": "retail_bap_confirm_message_07",
              "type": "array",
              "minItems": 1,
              "element": {
                "id": "retail_bap_confirm_message_08",
                "type": "object",
                "optional": true,
                "properties": {
                  "id": {
                    "id": "retail_bap_confirm_message_09",
                    "type": "string",
                    "minLength": 1
                  }
                }
              }
            }
          }
        },
        "items": {
          "id": "retail_bap_confirm_message_10",
          "type": "array",
          "minItems": 1,
          "element": {
            "id": "retail_bap_confirm_message_11",
            "type": "object",
            "properties": {
              "fulfillment_id": {
                "id": "retail_bap_confirm_message_12",
                "type": "string",
                "minLength": 1
              },
              "id": {
                "id": "retail_bap_confirm_message_13",
                "type": "string",
                "minLength": 1
              },
              "quantity": {
                "id": "retail_bap_confirm_message_14",
                "type": "object",
                "properties": {
                  "count": {
                    "id": "retail_bap_confirm_message_15",
                    "type": "number"
                  }
                }
              },
              "parent_item_id": {
                "id": "retail_bap_confirm_message_93",
                "type": "string",
                "minLength": 1
              },
              "tags": {
                "id": "retail_bap_confirm_message_94",
                "type": "array",
                "minItems": 1,
                "element": {
                  "id": "retail_bap_confirm_message_95",
                  "type": "object",
                  "properties": {
                    "code": {
                      "id": "retail_bap_confirm_message_96",
                      "type": "string",
                      "minLength": 1,
                      "enum": ["type", "parent"]
                    },
                    "list": {
                      "id": "retail_bap_confirm_message_97",
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
                              "id": "retail_bap_confirm_message_98",
                              "type": "object",
                              "properties": {
                                "code": {
                                  "id": "retail_bap_confirm_message_99",
                                  "type": "string",
                                  "minLength": 1,
                                  "enum": ["type"]
                                },
                                "value": {
                                  "id": "retail_bap_confirm_message_100",
                                  "type": "string",
                                  "minLength": 1,
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
                              "id": "retail_bap_confirm_message_101",
                              "type": "object",
                              "properties": {
                                "code": {
                                  "id": "retail_bap_confirm_message_102",
                                  "type": "string",
                                  "minLength": 1,
                                  "enum": ["id"]
                                },
                                "value": {
                                  "id": "retail_bap_confirm_message_103",
                                  "type": "string",
                                  "minLength": 1
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
                            "ONDC:RET14",
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
                      "location_id",
                      "quantity"
                    ]
                  },
                  {
                    "if": {
                      "properties": {
                        "type": "params",
                        "domain": {
                          "const": "ONDC:RET11"
                        }
                      }
                    },
                    "then": [
                      "id",
                      "parent_item_id",
                      "location_id",
                      "quantity",
                      "tags"
                    ]
                  }
                ]
              }
            }
          }
        },
        "billing": {
          "id": "retail_bap_confirm_message_16",
          "type": "object",
          "properties": {
            "address": {
              "id": "retail_bap_confirm_message_17",
              "type": "object",
              "properties": {
                "area_code": {
                  "id": "retail_bap_confirm_message_18",
                  "type": "string",
                  "minLength": 1
                },
                "building": {
                  "id": "retail_bap_confirm_message_19",
                  "type": "string",
                  "minLength": 1
                },
                "city": {
                  "id": "retail_bap_confirm_message_20",
                  "type": "string",
                  "minLength": 1
                },
                "country": {
                  "id": "retail_bap_confirm_message_21",
                  "type": "string",
                  "minLength": 1
                },
                "locality": {
                  "id": "retail_bap_confirm_message_22",
                  "type": "string",
                  "minLength": 1
                },
                "name": {
                  "id": "retail_bap_confirm_message_23",
                  "type": "string",
                  "minLength": 1
                },
                "state": {
                  "id": "retail_bap_confirm_message_24",
                  "type": "string",
                  "minLength": 1
                }
              }
            },
            "created_at": {
              "id": "retail_bap_confirm_message_25",
              "type": "string",
              "minLength": 1,
              "format": "rfc3339-date-time",
              "errorMessage": "Time must be RFC3339 UTC timestamp format."
            },
            "email": {
              "id": "retail_bap_confirm_message_26",
              "type": "string",
              "minLength": 1,
              "optional": true,
              "compliance": "email"
            },
            "name": {
              "id": "retail_bap_confirm_message_27",
              "type": "string",
              "minLength": 1
            },
            "tax_number": {
              "id": "retail_bap_confirm_message_104",
              "type": "string",
              "minLength": 1,
              "optional": true,
              "compliance": "gst"
            },
            "phone": {
              "id": "retail_bap_confirm_message_28",
              "type": "string",
              "minLength": 1
            },
            "updated_at": {
              "id": "retail_bap_confirm_message_29",
              "type": "string",
              "minLength": 1,
              "format": "rfc3339-date-time",
              "errorMessage": "Time must be RFC3339 UTC timestamp format."
            }
          }
        },
        "fulfillments": {
          "id": "retail_bap_confirm_message_30",
          "type": "array",
          "minItems": 1,
          "element": {
            "id": "retail_bap_confirm_message_31",
            "type": "object",
            "properties": {
              "end": {
                "id": "retail_bap_confirm_message_32",
                "type": "object",
                "properties": {
                  "contact": {
                    "id": "retail_bap_confirm_message_33",
                    "type": "object",
                    "properties": {
                      "email": {
                        "id": "retail_bap_confirm_message_34",
                        "type": "string",
                        "minLength": 1,
                        "optional": true,
                        "compliance": "email"
                      },
                      "phone": {
                        "id": "retail_bap_confirm_message_35",
                        "type": "string",
                        "minLength": 1
                      }
                    }
                  },
                  "location": {
                    "id": "retail_bap_confirm_message_36",
                    "type": "object",
                    "properties": {
                      "address": {
                        "id": "retail_bap_confirm_message_37",
                        "type": "object",
                        "properties": {
                          "area_code": {
                            "id": "retail_bap_confirm_message_38",
                            "type": "string",
                            "minLength": 1
                          },
                          "building": {
                            "id": "retail_bap_confirm_message_39",
                            "type": "string",
                            "minLength": 1
                          },
                          "city": {
                            "id": "retail_bap_confirm_message_40",
                            "type": "string",
                            "minLength": 1
                          },
                          "country": {
                            "id": "retail_bap_confirm_message_41",
                            "type": "string",
                            "minLength": 1
                          },
                          "locality": {
                            "id": "retail_bap_confirm_message_42",
                            "type": "string",
                            "minLength": 1
                          },
                          "name": {
                            "id": "retail_bap_confirm_message_43",
                            "type": "string",
                            "minLength": 1
                          },
                          "state": {
                            "id": "retail_bap_confirm_message_44",
                            "type": "string",
                            "minLength": 1
                          }
                        }
                      },
                      "gps": {
                        "id": "retail_bap_confirm_message_45",
                        "type": "string",
                        "minLength": 1,
                        "compliance": "gps-coord"
                      }
                    }
                  },
                  "person": {
                    "id": "retail_bap_confirm_message_46",
                    "type": "object",
                    "properties": {
                      "name": {
                        "id": "retail_bap_confirm_message_47",
                        "type": "string",
                        "minLength": 1
                      }
                    }
                  }
                }
              },
              "vehicle": {
                "id": "retail_bap_confirm_message_32",
                "type": "object",
                "properties": {
                  "registration": {
                    "id": "retail_bap_confirm_message_33",
                    "type": "string",
                    "optional": true,
                  },
                  "location": {
                    "id": "retail_bap_confirm_message_36",
                    "type": "object",
                    "properties": {
                      "address": {
                        "id": "retail_bap_confirm_message_37",
                        "type": "object",
                        "properties": {
                          "area_code": {
                            "id": "retail_bap_confirm_message_38",
                            "type": "string",
                            "minLength": 1
                          },
                          "building": {
                            "id": "retail_bap_confirm_message_39",
                            "type": "string",
                            "minLength": 1
                          },
                          "city": {
                            "id": "retail_bap_confirm_message_40",
                            "type": "string",
                            "minLength": 1
                          },
                          "country": {
                            "id": "retail_bap_confirm_message_41",
                            "type": "string",
                            "minLength": 1
                          },
                          "locality": {
                            "id": "retail_bap_confirm_message_42",
                            "type": "string",
                            "minLength": 1
                          },
                          "name": {
                            "id": "retail_bap_confirm_message_43",
                            "type": "string",
                            "minLength": 1
                          },
                          "state": {
                            "id": "retail_bap_confirm_message_44",
                            "type": "string",
                            "minLength": 1
                          }
                        }
                      },
                      "gps": {
                        "id": "retail_bap_confirm_message_45",
                        "type": "string",
                        "minLength": 1,
                        "compliance": "gps-coord"
                      }
                    }
                  },
                  "person": {
                    "id": "retail_bap_confirm_message_46",
                    "type": "object",
                    "properties": {
                      "name": {
                        "id": "retail_bap_confirm_message_47",
                        "type": "string",
                        "minLength": 1
                      }
                    }
                  }
                }
              },
              "id": {
                "id": "retail_bap_confirm_message_48",
                "type": "string",
                "minLength": 1
              },
              "tracking": {
                "id": "retail_bap_confirm_message_49",
                "type": "boolean",
                "enum": [true, false]
              },
              "type": {
                "id": "retail_bap_confirm_message_50",
                "type": "string",
                "minLength": 1,
                "enum": ["Delivery"]
              },
              "@ondc/org/TAT": {
                "id": "retail_bap_confirm_message_",
                "type": "string",
                "minLength": 1
              },
            }
          }
        },
        "quote": {
          "id": "retail_bap_confirm_message_51",
          "type": "object",
          "properties": {
            "breakup": {
              "id": "retail_bap_confirm_message_52",
              "type": "array",
              "minItems": 1,
              "element": {
                "id": "retail_bap_confirm_message_53",
                "type": "object",
                "properties": {
                  "@ondc/org/item_id": {
                    "id": "retail_bap_confirm_message_54",
                    "type": "string",
                    "minLength": 1
                  },
                  "@ondc/org/title_type": {
                    "id": "retail_bap_confirm_message_55",
                    "type": "string",
                    "minLength": 1
                  },
                  "price": {
                    "id": "retail_bap_confirm_message_56",
                    "type": "object",
                    "properties": {
                      "currency": {
                        "id": "retail_bap_confirm_message_57",
                        "type": "string",
                        "minLength": 1
                      },
                      "value": {
                        "id": "retail_bap_confirm_message_58",
                        "type": "string",
                        "minLength": 1
                      }
                    }
                  },
                  "@ondc/org/item_quantity": {
                    "id": "retail_bpp_on_confirm_message_108",
                    "type": "object",
                    "properties": {
                      "count": {
                        "id": "retail_bpp_on_confirm_message_109",
                        "type": "number"
                      }
                    }
                  },
                  "title": {
                    "id": "retail_bap_confirm_message_59",
                    "type": "string",
                    "minLength": 1
                  },
                  "item": {
                    "id": "retail_bpp_on_confirm_message_110",
                    "type": "object",
                    "properties": {
                      "parent_item_id": {
                        "id": "retail_bpp_on_confirm_message_111",
                        "type": "string"
                      },
                      "price": {
                        "id": "retail_bpp_on_confirm_message_112",
                        "type": "object",
                        "properties": {
                          "currency": {
                            "id": "retail_bpp_on_confirm_message_113",
                            "type": "string",
                            "minLength": 1
                          },
                          "value": {
                            "id": "retail_bpp_on_confirm_message_114",
                            "type": "string",
                            "minLength": 1
                          }
                        }
                      },
                      "tags": {
                        "id": "retail_bpp_on_confirm_message_127",
                        "type": "array",
                        "element": {
                          "id": "retail_bpp_on_confirm_message_128",
                          "type": "object",
                          "properties": {
                            "code": {
                              "id": "retail_bpp_on_confirm_message_115",
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
                              "id": "retail_bpp_on_confirm_message_116",
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
                                          "id": "retail_bpp_on_confirm_message_117",
                                          "type": "string",
                                          "enum": ["type"]
                                        },
                                        "value": {
                                          "id": "retail_bpp_on_confirm_message_118",
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
                                          "id": "retail_bpp_on_confirm_message_119",
                                          "type": "string",
                                          "enum": ["id"]
                                        },
                                        "value": {
                                          "id": "retail_bpp_on_confirm_message_120",
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
                                          "id": "retail_bpp_on_confirm_message_121",
                                          "type": "string",
                                          "enum": ["country"]
                                        },
                                        "value": {
                                          "id": "retail_bpp_on_confirm_message_122",
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
                                          "id": "retail_bpp_on_confirm_message_123",
                                          "type": "string",
                                          "enum": ["veg"]
                                        },
                                        "value": {
                                          "id": "retail_bpp_on_confirm_message_124",
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
                                          "id": "retail_bpp_on_confirm_message_125",
                                          "type": "string",
                                          "enum": ["default"]
                                        },
                                        "value": {
                                          "id": "retail_bpp_on_confirm_message_126",
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
            "price": {
              "id": "retail_bap_confirm_message_60",
              "type": "object",
              "properties": {
                "currency": {
                  "id": "retail_bap_confirm_message_61",
                  "type": "string",
                  "minLength": 1
                },
                "value": {
                  "id": "retail_bap_confirm_message_62",
                  "type": "string",
                  "minLength": 1
                }
              }
            },
            "ttl": {
              "id": "retail_bap_confirm_message_63",
              "type": "string",
              "minLength": 1
            }
          }
        },
        "tags": {
          "id": "retail_bap_confirm_message_64",
          "type": "array",
          "minItems": 1,
          "element": {
            "id": "retail_bap_confirm_message_65",
            "type": "object",
            "properties": {
              "code": {
                "id": "retail_bap_confirm_message_66",
                "type": "string",
                "minLength": 1
              },
              "list": {
                "id": "retail_bap_confirm_message_67",
                "type": "array",
                "minItems": 1,
                "element": {
                  "id": "retail_bap_confirm_message_68",
                  "type": "object",
                  "properties": {
                    "code": {
                      "id": "retail_bap_confirm_message_69",
                      "type": "string",
                      "minLength": 1
                    },
                    "value": {
                      "id": "retail_bap_confirm_message_70",
                      "type": "string",
                      "minLength": 1
                    }
                  }
                }
              }
            }
          }
        },
        "payment": {
          "id": "retail_bap_confirm_message_71",
          "type": "object",
          "properties": {
            "uri": {
              "id": "retail_bap_confirm_message_72",
              "type": "string",
              "minLength": 1,
              "optional": true
            },
            "tl_method": {
              "id": "retail_bap_confirm_message_72",
              "type": "string",
              "minLength": 1,
              "optional": true
            },
            "@ondc/org/buyer_app_finder_fee_amount": {
              "id": "retail_bap_confirm_message_72",
              "type": "string",
              "minLength": 1
            },
            "@ondc/org/buyer_app_finder_fee_type": {
              "id": "retail_bap_confirm_message_73",
              "type": "string",
              "minLength": 1
            },
            "@ondc/org/settlement_details": {
              "id": "retail_bap_confirm_message_74",
              "type": "array",
              "minItems": 1,
              "element": {
                "id": "retail_bap_confirm_message_75",
                "type": "object",
                "properties": {
                  "bank_name": {
                    "id": "retail_bap_confirm_message_76",
                    "type": "string",
                    "minLength": 1
                  },
                  "beneficiary_name": {
                    "id": "retail_bap_confirm_message_77",
                    "type": "string",
                    "minLength": 1
                  },
                  "branch_name": {
                    "id": "retail_bap_confirm_message_78",
                    "type": "string",
                    "minLength": 1
                  },
                  "settlement_bank_account_no": {
                    "id": "retail_bap_confirm_message_79",
                    "type": "string",
                    "minLength": 1
                  },
                  "settlement_counterparty": {
                    "id": "retail_bap_confirm_message_80",
                    "type": "string",
                    "minLength": 1
                  },
                  "settlement_ifsc_code": {
                    "id": "retail_bap_confirm_message_81",
                    "type": "string",
                    "minLength": 1
                  },
                  "settlement_phase": {
                    "id": "retail_bap_confirm_message_82",
                    "type": "string",
                    "minLength": 1
                  },
                  "settlement_type": {
                    "id": "retail_bap_confirm_message_83",
                    "type": "string",
                    "minLength": 1
                  }
                }
              }
            },
            "@ondc/org/settlement_basis": {
              "id": "retail_bap_confirm_message_105",
              "type": "string",
              "minLength": 1,
            },
            "@ondc/org/settlement_window": {
              "id": "retail_bap_confirm_message_106",
              "type": "string",
              "minLength": 1,
            },
            "@ondc/org/withholding_amount": {
              "id": "retail_bap_confirm_message_107",
              "type": "string",
              "minLength": 1,
            },
            "type": {
              "id": "retail_bap_confirm_message_84",
              "type": "string",
              "minLength": 1
            },
            "collected_by": {
              "id": "retail_bap_confirm_message_85",
              "type": "string",
              "minLength": 1
            },
            "params": {
              "id": "retail_bap_confirm_message_86",
              "type": "object",
              "properties": {
                "amount": {
                  "id": "retail_bap_confirm_message_87",
                  "type": "string",
                  "minLength": 1
                },
                "currency": {
                  "id": "retail_bap_confirm_message_88",
                  "type": "string",
                  "minLength": 1
                },
                "transaction_id": {
                  "id": "retail_bap_confirm_message_89",
                  "type": "string",
                  "minLength": 1
                }
              }
            },
            "status": {
              "id": "retail_bap_confirm_message_90",
              "type": "string",
              "minLength": 1
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
                    "collected_by",
                    "@ondc/org/settlement_details",
                    "status",
                    "type",
                    "@ondc/org/buyer_app_finder_fee_amount",
                    "@ondc/org/buyer_app_finder_fee_type"
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
                    "collected_by",
                    "status",
                    "type",
                    "params",
                    "@ondc/org/settlement_basis",
                    "@ondc/org/settlement_window",
                    "@ondc/org/withholding_amount",
                    "@ondc/org/buyer_app_finder_fee_amount",
                    "@ondc/org/buyer_app_finder_fee_type"
                  ]
                }
              ]
            }
          }
        },
        "created_at": {
          "id": "retail_bap_confirm_message_91",
          "type": "string",
          "minLength": 1,
          "format": "rfc3339-date-time",
          "errorMessage": "Time must be RFC3339 UTC timestamp format."
        },
        "updated_at": {
          "id": "retail_bap_confirm_message_92",
          "type": "string",
          "minLength": 1,
          "format": "rfc3339-date-time",
          "errorMessage": "Time must be RFC3339 UTC timestamp format."
        },
        "offers": {
          "id": "retail_bap_select_message_93",
          "type": "object",
          "optional": true,
          "minItems": 1,
          "element": {
            "id": "retail_bap_select_message_94",
            "type": "object",
            "properties": {
              "id": {
                "id": "retail_bap_select_message_95",
                "type": "string",
                "optional": true,
                "minLength": 1
              }
            }
          }
        },
      }
    }
  }
}