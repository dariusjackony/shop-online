from setuptools import setup, Extension
from pybind11.setup_helpers import Pybind11Extension, build_ext
import sys

# This defines your module
ext_modules = [
    Pybind11Extension(
        "example",
        ["main.cpp"],
    ),
]

class build_ext_mingw(build_ext):
    def build_extensions(self):
        # This line is the magic: it wipes out the /std:c++latest flag
        # and replaces it with the -std=c++11 flag that MinGW likes.
        for ext in self.extensions:
            ext.extra_compile_args = ["-std=c++11", "-O3"]
            ext.extra_link_args = [] 
        
        # We also have to tell pybind11 NOT to add its own default flags
        self.cxx_std = None 
        
        super().build_extensions()

setup(
    name="example",
    ext_modules=ext_modules,
    cmdclass={"build_ext": build_ext_mingw},
)