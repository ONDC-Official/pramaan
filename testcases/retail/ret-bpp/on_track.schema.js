module.exports = {
    "id": "retail_bpp_on_track_message_17",
    "type": "object",
    "properties": {
        "tracking": {
            "id": "retail_bpp_on_track_message_16",
            "type": "object",
            "properties": {
                "id": {
                    "id": "retail_bpp_on_track_message_1",
                    "type": "string",
                    "minLength": 1
                },
                "location": {
                    "id": "retail_bpp_on_track_message_6",
                    "type": "object",
                    "optional": true,
                    "properties": {
                        "gps": {
                            "id": "retail_bpp_on_track_message_2",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "time": {
                            "id": "retail_bpp_on_track_message_4",
                            "type": "object",
                            "optional": true,
                            "properties": {
                                "timestamp": {
                                    "id": "retail_bpp_on_track_message_3",
                                    "type": "string",
                                    "minLength": 1,
                                    "optional": true
                                }
                            }
                        },
                        "updated_at": {
                            "id": "retail_bpp_on_track_message_5",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        }
                    }
                },
                "url": {
                    "id": "retail_bpp_on_track_message_7",
                    "type": "string",
                    "minLength": 1
                },
                "status": {
                    "id": "retail_bpp_on_track_message_8",
                    "type": "string",
                    "minLength": 1
                },
                "tags": {
                    "id": "retail_bpp_on_track_message_9",
                    "type": "array",
                    "minItems": 1,
                    "optional": true,
                    "element": {
                        "id": "retail_bpp_on_track_message_15",
                        "type": "object",
                        "properties": {
                            "code": {
                                "id": "retail_bpp_on_track_message_10",
                                "type": "string",
                                "minLength": 1,
                                "optional": true
                            },
                            "list": {
                                "id": "retail_bpp_on_track_message_11",
                                "type": "array",
                                "minItems": 1,
                                "optional": true,
                                "element": {
                                    "id": "retail_bpp_on_track_message_14",
                                    "type": "object",
                                    "properties": {
                                        "code": {
                                            "id": "retail_bpp_on_track_message_12",
                                            "type": "string",
                                            "minLength": 1,
                                            "optional": true
                                        },
                                        "value": {
                                            "id": "retail_bpp_on_track_message_13",
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
            }
        }
    }
}