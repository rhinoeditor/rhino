//! This integration test runs the test scripts found in
//! the scripts/ directory
//! Each test script specifies input JSON to send and optionally
//! the JSON output it expects to receive
//! Scripts can assert that produced images are the same as other
//! provided image files
//! Scripts should keep all paths relative to the image-worker/
//! directory
//! We will assert after sending each command that the response
//! received is Success
//!
//! ## Syntax
//! Most lines in a test script are just JSON that represents
//! some input to pass to the worker process.
//!
//! ```
//! {"Load": {"path": "tests/assets/sample.jpg"}}
//! {"Crop": {"x": 900, "y": 800, "width": 640, "height": 480}}
//! {"Save": {"path": "output.jpg"}}
//! ```
//!
//! You can assert that the output image is as expected:
//!
//! ```
//! %output.jpg => tests/assets/crop-640x480+900+800.jpg
//! ```
//!
//! You can assert that the output of a given input line
//! is as expected:
//!
//! ```
//! >{"Success": {...whatever you expect here...}}
//! ```
//!
//! If you provide this, we will not check the output
//! for anything other than it matches this. That means
//! you can account for failures explicitly.
//!
//! With no expected output provided, we will check to
//! see if the output was a success and that is it.

#[test]
fn run_scripts() {
    unimplemented!()
}
