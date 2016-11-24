# Loading an empty image should not work
{"Load": {"path": "tests/assets/empty.jpg"}}
>{"ActionFailed":{"reason":"Format error: zero width in frame header"}}

# Disallow loading empty filename
{"Load": {"path": ""}}
>{"ActionFailed":{"reason":"Cannot load empty path"}}

# Disallow saving empty filename
{"Load": {"path": "tests/assets/sample2.jpg"}}
{"Save": {"path": ""}}
>{"ActionFailed":{"reason":"Cannot save empty path"}}