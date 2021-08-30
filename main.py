import logging
import yaml
import random
from argparse import ArgumentParser
import pathlib
from argparse import ArgumentParser
from pipeline import Pipeline
import sys
sys.path.insert(0, "./AL_final")
sys.path.insert(0, "./AL_final/ActiveLabeler-main")
sys.path.insert(0, "./AL_final/ActiveLabeler-main/Self-Supervised-Learner")
sys.path.insert(0, "./AL_final/ActiveLabeler-main/ActiveLabelerModels")

#TODO need to incorporate setting up dataset like dummy dataset, etc. that is there on colab here

def main():
    parser = ArgumentParser()
    parser.add_argument("--config_path,--class_name", type=str, help="Path to config file")
    args = parser.parse_args()
    config_path = args.config_path
    class_name = args.class_name

    with open(config_path) as file:
        config = yaml.safe_load(file)

    #set seed
    random.seed(config["seed"])

    #log settings
    if config["verbose"] ==0:
        logging.basicConfig(
            level=logging.DEBUG,
            format="%(asctime)s - %(levelname)-8s - %(funcName)-15s - %(message)s', datefmt='%d-%b-%y %H:%M:%S",
            handlers=[
                logging.FileHandler("/content/app.log", mode='a')
            ]
        )
    else:
        logging.basicConfig(
            level=logging.DEBUG,
            format="%(asctime)s - %(levelname)-8s - %(funcName)-15s - %(message)s', datefmt='%d-%b-%y %H:%M:%S",
            handlers=[
                logging.FileHandler("/content/app.log", mode='a'),
                logging.StreamHandler()
            ]
        )

    # initialize pipeline object
    pipeline = Pipeline(config_path=config_path, class_name=class_name)

if __name__ == '__main__':
    main()






