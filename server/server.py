from flask import Flask, request, send_file
from flask_cors import CORS
from pytubefix import YouTube
from pytubefix.cli import on_progress
from os import getcwd, remove

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/pegar__nome", methods=['GET'])
def pegar__nome():
    url = request.args.get('url')

    try:
        yt = YouTube(url, on_progress_callback=on_progress)

        return yt.title

    except:
        return [False]

@app.route('/baixar__audio', methods=['GET'])
def baixar__audio():
    try:
        url = request.args.get('url')
        yt = YouTube(url, on_progress_callback=on_progress)

        ys = yt.streams.get_audio_only()

        diretorio = getcwd() + "/server/audios"

        ys.download(output_path=diretorio)

        return send_file(f"{diretorio}/{ys.title.replace("/", "").replace("\\", "").replace(":", "").replace("*", "").replace("?", "").replace('"', "").replace("<", "").replace(">", "").replace("|", "")}.m4a", as_attachment=True)

    except:
        return [False]

@app.route("/deleta__video__provisorio", methods=["DELETE"])
def deleta__video__provisorio():
    print("Chegou aqui")
    url = request.args.get('url')

    try:
        yt = YouTube(url, on_progress_callback=on_progress)

        remove(f"{getcwd() + "/server/audios"}/{yt.title.replace("/", "").replace("\\", "").replace(":", "").replace("*", "").replace("?", "").replace('"', "").replace("<", "").replace(">", "").replace("|", "")}.m4a")
        
        return [True]

    except:
        return [False]

app.run(port=3000, host='localhost', debug=True)