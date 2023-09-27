export const obj = {
    "root": [
        {
            "component": "container-header",
            "children": [
                {
                    "component": "container-logo",
                    "path": {
                        "url": "https://unilog.com.br/wp-content/uploads/2022/12/Objeto-Inteligente-de-Vetor.png"
                    },
                    "style": {
                        "width": "80px"
                    }
                },
                {
                    "component": "container-logo",
                    "path": {
                        "url": "https://unilog.com.br/wp-content/uploads/2022/12/Objeto-Inteligente-de-Vetor.png"
                    },
                    "style": {
                        "width": "80px"
                    }
                }
            ],
            "style": {
                "width": "240px",
                "display": "flex",
                "justify-content": "space-around",
                "backgroundColor": "blue",
                "height": "64px",
                "alignItems": "center"
            }
        },
        {
            "component": "container-body",
            "children": [
                {
                    "component": "container-news-notices",
                    "style": {
                        "display": "flex",
                        "justifyContent": "space-around",
                        "width": "240px",
                        "height": "96px",
                        "alignItems": "center",
                        "backgroundColor": "light-blue",
                    }
                },
                {
                    "component": "container-basic",
                    "children": [
                        {
                            "component": "container-action",
                            "text": "PAINEL",
                            "path": {
                                "url": "...painel"
                            },
                            "onPress": [
                                {
                                    "action": "",
                                    "route": {
                                        "url": "/"
                                    }
                                }
                            ]
                        },
                        {
                            "component": "container-action",
                            "text": "ESPAÇO CIA",
                            "path": {
                                "url": ""
                            },
                            "onPress": [
                                {
                                    "action": "",
                                    "route": {
                                        "url": "/"
                                    }
                                }
                            ]
                        },
                    ],
                    "style": {
                        "display": "flex",
                        "justifyContent": "space-between",
                        "width": "240px",
                        "height": "64px",
                        "padding": "10px"
                    }
                },
                {
                    "component": "container-basic",
                    "children": [
                        {
                            "component": "container-action",
                            "text": "A CAMPANHA",
                            "path": {
                                "url": ""
                            },
                            "onPress": [
                                {
                                    "action": "",
                                    "route": {
                                        "url": "/"
                                    }
                                }
                            ]
                        },
                        {
                            "component": "container-action",
                            "text": "ESPAÇO RH",
                            "path": {
                                "url": ""
                            },
                            "onPress": [
                                {
                                    "action": "/",
                                    "route": {
                                        "url": ""
                                    }
                                }
                            ]
                        }
                    ],
                    "style": {
                        "display": "flex",
                        "justifyContent": "space-between",
                        "width": "240px",
                        "height": "80px",
                        "padding": "10px"
                    }
                }
            ],
            "style": {
                "background": {
                    "image": "url()"
                }
            }
        },
        {
            "component": "container-footer-default",
            "style": {
                "width": "240px",
                "backgroundColor": "orange"
            },
            "text": "Desenvolvido por InfinityBrasil"
        }
    ]
}