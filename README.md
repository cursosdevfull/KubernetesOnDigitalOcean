# Kubernetes on Digital Ocean

### DigitalOcean CLI (doctl)

```
docker run -it --rm -v ${PWD}:/work -w /work --entrypoint /bin/bash digitalocean/doctl:1.55.0
mv /app/doctl /usr/local/bin
```

### Autenticación con DO

- Generar y obtener un token desde el panel de DO (menú de la izquierda, opción API)

```
doctl auth init
```

### Creación de un proyecto

```
doctl projects create --name testing-k8s --purpose testingK8s
```

### Revisión de opciones con Kubernetes

```
doctl kubernetes options
doctl kubernetes options regions
doctl kubernetes options versions
doctl kubernetes options sizes
```

### Creación de cluster

```
doctl kubernetes cluster create k8s-testing \
--version 1.19.3-do.3 \
--count 1 \
--size s-1vcpu-2gb \
--region nyc1
```

### Obtención de la configuración de Kubernetes en DO

```
doctl kubernetes cluster kubeconfig save k8s-testing
```

### Obtención del kubectl

```
curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl
chmod +x ./kubectl
mv ./kubectl /usr/local/bin/kubectl
```

### Ejecución de yaml de K8S

```
kubeclt apply -f deployment.yaml
kubectl apply -f service.yaml
```

### Eliminación de cluster

```
doctl kubernetes cluster delete k8s-testing
```

### Eliminación de balanceador

Hay que hacerlo desde el panel de DO

---

### Cursos Pro

[Cursos Dev](https://cursos-dev.com)
